"use client";

import Navbar from "@/components/Navbar";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {
   const typeText = useRef(null);

   useEffect(() => {
      const typed = new Typed(typeText.current, {
         strings: ["FullStack Developer", "Backend Developer", "Student"],
         typeSpeed: 50,
         backSpeed: 70,
         backDelay: 1000,
         loop: true,
         shuffle: true,
      });

      return () => {
         typed.destroy();
      };
   }, []);

   return (
      <>
         <Navbar />

         <section id="home" className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-4 md:space-y-2">
               <div className="flex flex-wrap items-center justify-center">
                  <div className="h-px w-7 flex-1 bg-white md:w-10"></div>
                  <h4 className="mx-1 text-sm font-bold text-white md:text-base">Welcome</h4>
                  <div className="h-px w-7 flex-1 bg-white md:w-10"></div>
               </div>
               <div className="py-10">
                  <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                     I am <span className="text-pink">Khairul</span> Akmal
                  </h1>
               </div>
               <div>
                  <h4 className="text-base font-bold text-white md:text-xl lg:text-2xl">
                     <span ref={typeText}></span>
                  </h4>
               </div>
            </div>
         </section>
      </>
   );
}
