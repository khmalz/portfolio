import useTyped from "@/hooks/useTyped";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HomeSection() {
   const trlns = useTranslations("home");

   const typeTexRef = useTyped(["FullStack Developer", "Backend Developer", "Mobile Developer", "Android Developer", trlns("student")]);

   return (
      <section id="home" className="container mt-20 grid min-h-screen grid-cols-1 md:mt-0 md:grid-cols-2 md:items-center">
         <div className="flex flex-col items-center space-y-4 self-end md:items-start md:space-y-2 md:self-center">
            <div className="flex flex-wrap items-center justify-center">
               <div className="h-px w-7 flex-1 bg-white md:w-10"></div>
               <h4 className="mx-1 text-sm font-bold text-white md:text-lg xl:text-xl">{trlns("welcome")}</h4>
               <div className="h-px w-7 flex-1 bg-white md:w-10"></div>
            </div>
            <div className="py-10">
               <h1 className="text-center text-3xl font-bold text-white sm:text-4xl md:text-start md:text-5xl lg:text-6xl">
                  {trlns("me")} <span className="text-pink">Khairul</span> Akmal
               </h1>
            </div>
            <div>
               <h4 className="text-base font-bold text-white md:text-xl lg:text-2xl">
                  <span ref={typeTexRef}></span>
               </h4>
            </div>
         </div>
         <div className="order-1 mb-8 mt-7 self-start text-center md:order-2 md:mb-0 md:mt-0 md:self-center">
            <Image width={600} height={600} priority src="/images/profil-pict.png" alt="profil picture" className="w-120 md:w-132 inline-block" />
         </div>
      </section>
   );
}
