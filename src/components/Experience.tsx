import experiencesCollection from "@/docs/experiences";
import TranslatedStringDate from "@/helpers/TranslatedStringDate";
import { experienceType } from "@/types/experienceType";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ExperienceSection() {
   const trlns = useTranslations("experience");
   const [experiences] = useState<experienceType[]>(experiencesCollection);

   return (
      <section id="experience" className="container mt-5 py-10 pt-16 md:mt-10">
         <div className="flex flex-col">
            <div className="flex items-center self-baseline">
               <div className="h-px w-10 flex-1 border bg-white"></div>
               <h4 className="mx-1 text-3xl font-bold">{trlns("title")}</h4>
            </div>
            <div className="mt-14 w-full">
               <ol className="relative ml-8 border-s border-gray-200">
                  {experiences.map((experience: experienceType, index: number) => (
                     <li key={index} className={`ms-10 ${index === 0 && "mb-10"}`}>
                        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white">
                           <svg
                              className="h-2.5 w-2.5 text-secondary"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
                              <line x1={8} y1={21} x2={16} y2={21} />
                              <line x1={12} y1={17} x2={12} y2={21} />
                           </svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-white">{experience.companyName}</h3>
                        <time className="mb-2 block text-xs font-normal leading-none text-slate-300 md:text-sm">
                           {TranslatedStringDate(experience.startDate)} - {TranslatedStringDate(experience.endDate)}
                        </time>
                        <p className="text-base font-normal text-slate-200">{experience.position}</p>
                     </li>
                  ))}
               </ol>
            </div>
         </div>
      </section>
   );
}
