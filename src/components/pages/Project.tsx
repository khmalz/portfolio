import { useTranslations } from "next-intl";

import ProjectList from "@/components/ProjectList";
import projectsCollection from "@/docs/projects";
import type { projectType } from "@/types/projectType";

export default function ProjectSection() {
   const trlns = useTranslations("project");
   const projects: projectType[] = projectsCollection;

   return (
      <section id="project" className="container mt-5 py-10 pt-16 md:mt-10">
         <div className="flex flex-col">
            <div className="flex items-center self-baseline">
               <div className="h-px w-10 flex-1 border bg-white"></div>
               <h4 className="mx-1 text-3xl font-bold">{trlns("title")}</h4>
            </div>
            <ProjectList projects={projects} trlnsMore={trlns("more")} />
         </div>
      </section>
   );
}
