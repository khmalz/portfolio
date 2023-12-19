import projectsCollection from "@/docs/projects";
import { projectType } from "@/types/projectType";
import Image from "next/image";
import { useState } from "react";

export default function ProjectSection() {
   const [projects] = useState<projectType[]>(projectsCollection);

   return (
      <section id="project" className="container mt-5 py-10 pt-16 md:mt-10">
         <div className="flex flex-col">
            <div className="flex items-center self-baseline">
               <div className="h-px w-10 flex-1 border bg-white"></div>
               <h4 className="mx-1 text-3xl font-bold">Project</h4>
            </div>
            <div className="mx-auto mt-14 grid grid-cols-1 gap-8 md:mx-0 md:grid-cols-2 xl:grid-cols-3">
               {projects.map((project: projectType, index: number) => (
                  <div key={index} className="group flex max-w-md flex-col justify-between overflow-hidden rounded-lg bg-secondary shadow backdrop-blur-md transition-transform duration-300 hover:scale-102">
                     <div>
                        {project.image === "placeholder" ? (
                           <div className="flex h-52 w-auto items-center justify-center bg-gray-400">
                              <svg className="h-10 w-10 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                 <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                              </svg>
                           </div>
                        ) : (
                           <div className="h-52 w-auto overflow-hidden">
                              <Image width={500} height={500} className="w-full rounded-t-lg" src={project.image} alt={project.title} />
                           </div>
                        )}

                        <div className="p-5">
                           <h5 className="text-xl font-bold tracking-tight">{project.title}</h5>
                           <div className="my-3">
                              {project.tech.map((tag: string, index: number) => (
                                 <span key={index} className="mr-2 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 hover:bg-gray-200/90">
                                    {tag}
                                 </span>
                              ))}
                           </div>
                           <p className="text-sm font-normal text-slate-100 md:text-base">{project.description}</p>
                        </div>
                     </div>
                     <div className="flex space-x-3 px-5 pb-4 pt-2">
                        <a
                           target="_blank"
                           href={project.github}
                           className="inline-flex items-center rounded-lg bg-third px-3 py-2 text-center text-xs font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 md:text-sm">
                           <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="mr-2 inline-block" viewBox="0 0 1792 1792">
                              <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
                           </svg>
                           Open With Github
                        </a>
                        {project.demo && (
                           <a
                              target="_blank"
                              href={project.demo}
                              className="inline-flex items-center rounded-lg bg-third px-3 py-2 text-center text-xs font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 md:text-sm">
                              <svg viewBox="0 0 24 24" focusable="false" xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="mr-2 inline-block">
                                 <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <path d="M15 3h6v6" />
                                    <path d="M10 14L21 3" />
                                 </g>
                              </svg>
                              View Demo
                           </a>
                        )}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
