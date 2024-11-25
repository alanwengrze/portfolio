// import { CardProject } from "@/page/Projects/CardProject"
import { lazy } from "react";
import { PROJECTS } from "@/data/PROJECTS"
const CardProject = lazy(() => import('./CardProject'));
export function Projects() {
  return(
    <section aria-label="Projetos" className="px-4 w-full h-full">
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
        {
          PROJECTS.map((project) => 
            <CardProject key={project.id} project={project} />
          )
        }
      </div>
    </section>
  )
}