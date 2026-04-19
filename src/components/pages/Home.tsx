"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

import TypedText from "@/components/TypedText";

export default function HomeSection() {
   const trlns = useTranslations("home");
   const sectionRef = useRef<HTMLElement>(null);
   const imageRef = useRef<HTMLDivElement>(null);
   const [transform, setTransform] = useState("");
   const [glow, setGlow] = useState("");
   const [transitionClass, setTransitionClass] = useState("transition-all duration-1000 ease-out");

   useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
         if (window.innerWidth < 768) return;
         if (!sectionRef.current) return;

         const sectionRect = sectionRef.current.getBoundingClientRect();

         const isVisible = (
            sectionRect.bottom > -100 &&
            sectionRect.top < window.innerHeight + 100
         );

         if (!isVisible) {
            // Reset gracefully if out of view
            if (transitionClass !== "transition-all duration-1000 ease-out") {
               setTransitionClass("transition-all duration-1000 ease-out");
               setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
               setGlow("");
            }
            return;
         }

         if (transitionClass !== "transition-all duration-200 ease-out") {
            setTransitionClass("transition-all duration-200 ease-out");
         }

         const sectionCenterX = sectionRect.width / 2;
         const sectionCenterY = sectionRect.height / 2;

         const mouseXFromCenter = e.clientX - sectionRect.left - sectionCenterX;
         const mouseYFromCenter = e.clientY - sectionRect.top - sectionCenterY;

         const rotateX = (mouseYFromCenter / sectionCenterY) * -15;
         const rotateY = (mouseXFromCenter / sectionCenterX) * 15;

         setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);

         if (imageRef.current) {
            const imgRect = imageRef.current.getBoundingClientRect();
            const imgX = e.clientX - imgRect.left;
            const imgY = e.clientY - imgRect.top;
            setGlow(`radial-gradient(circle at ${imgX}px ${imgY}px, rgba(255,255,255,0.15) 0%, transparent 50%)`);
         }
      };

      const handleMouseLeave = () => {
         if (window.innerWidth < 768) return;
         setTransitionClass("transition-all duration-1000 ease-out");
         setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
         setGlow("");
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);

      return () => {
         window.removeEventListener("mousemove", handleMouseMove);
         window.removeEventListener("mouseleave", handleMouseLeave);
      };
   }, [transitionClass]);

   return (
      <section
         id="home"
         ref={sectionRef}
         className="container mt-20 grid min-h-[90vh] grid-cols-1 md:mt-0 md:grid-cols-2 md:items-center md:gap-8"
      >
         <div className="z-10 flex flex-col items-center self-end text-center md:items-start md:self-center md:text-left">

            <div className="mb-6 inline-flex items-center space-x-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 shadow-[0_8px_32px_0_#00000033] backdrop-blur-md">
               <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-pink"></span>
               </span>
               <h4 className="text-xs font-semibold tracking-widest text-slate-300 uppercase md:text-sm">{trlns("welcome")}</h4>
            </div>

            {/* Main Headline */}
            <div className="py-2">
               <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  {trlns("me")}{" "}
                  <span className="animate-gradient-x bg-[length:200%_auto] bg-gradient-to-r from-pink via-purple-400 to-pink bg-clip-text text-transparent filter drop-shadow-[0_0_25px_rgba(236,72,153,0.4)]">
                     Khairul
                  </span>
                  <br className="hidden md:block" />
                  {" "}Akmal
               </h1>
            </div>

            <div className="mt-6 md:mt-8">
               <div className="inline-block rounded-xl border border-white/10 bg-white/5 px-6 py-3 shadow-lg backdrop-blur-sm">
                  <h4 className="text-lg font-medium text-slate-200 md:text-xl lg:text-2xl">
                     <TypedText />
                  </h4>
               </div>
            </div>
         </div>

         <div className="order-1 mt-7 mb-8 flex justify-center self-start md:order-2 md:mt-0 md:mb-0 md:self-center">
            <div
               ref={imageRef}
               className={`relative group cursor-pointer ${transitionClass}`}
               style={{ transform, transformStyle: "preserve-3d" }}
            >
               <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-pink/20 via-purple-500/10 to-blue-500/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"></div>

               <div
                  className="absolute inset-0 z-20 pointer-events-none rounded-[3rem] mix-blend-overlay transition-opacity duration-300"
                  style={{ background: glow }}
               ></div>

               <Image
                  width={600}
                  height={600}
                  priority
                  src="/images/profil-pict.png"
                  alt="profil picture"
                  className="relative z-10 w-[380px] drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)] transition-all duration-500 sm:w-[440px] md:w-[480px] lg:w-[520px] xl:w-[550px]"
               />
            </div>
         </div>
      </section>
   );
}
