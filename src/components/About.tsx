import { useState } from "react";
import SvgTech from "./SvgTech";
import techsCollection from "@/docs/techs";
import { svgTechType } from "@/types/svgTechType";

export default function AboutSection() {
   const [techs] = useState<svgTechType[]>(techsCollection);

   return (
      <section id="about" className="container pt-16">
         <div className="flex flex-col justify-between space-y-8 rounded-xl bg-secondary px-5 py-10 text-white shadow-xl md:flex-row md:space-x-8 md:space-y-0">
            <div className="flex w-full flex-col space-y-5 bg-opacity-50 backdrop-blur-lg backdrop-filter md:w-1/2">
               <div className="flex items-center self-start">
                  <div className="h-px w-10 flex-1 border bg-white"></div>
                  <h4 className="mx-1 text-3xl font-bold">About</h4>
               </div>
               <h4 className="md:text-xl">Hi, Khairul Akmal here.</h4>
               <p className="text-justify text-sm md:text-base">
                  I am a web developer who is dedicated to creating useful websites for the outside world. I live in East Jakarta, Indonesia, and I am currently a student at SMKN 46 Jakarta. Started learning programming in 2020, which until now has
                  continued to improve and upgrade technical skills.
               </p>
               <p className="text-justify text-sm md:text-base">
                  I started off as a front-end developer and ended up as a back-end developer because I love the challenges that are getting bigger and bigger. My favorite thing is turning source code into{" "}
                  <span className="font-semibold text-pink">clean</span> code.
               </p>
               <a
                  target="_blank"
                  href="/CV-Khairul_Akmal.pdf"
                  className="inline-flex items-center self-baseline rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-fourth focus:z-10 focus:text-fourth focus:outline-none focus:ring-4 focus:ring-gray-200">
                  <svg className="me-2.5 h-3.5 w-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                     <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>
                  Check CV
               </a>
            </div>

            <div className="flex w-full items-center md:w-1/2">
               <div className="mx-auto grid w-full grid-cols-2 gap-5 px-4 lg:grid-cols-3 lg:px-0 xl:grid-cols-4">
                  {techs.map((tech: svgTechType, index: number) => (
                     <div className="card-about" key={index}>
                        <div className="w-full max-w-10">
                           <SvgTech title={tech.title} fill={tech.fill} path={tech.path} />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
