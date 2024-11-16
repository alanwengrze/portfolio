import { CardProject } from "@/components/CardProject"
import {  
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
 } from "@/components/ui/carousel"
import { PROJECTS } from "@/data/PROJECTS"
export function Projects() {
  return(
    <div id="projects" className="px-4 w-full h-screen">
      <Carousel>
        <CarouselContent className="mb-4">
          <CarouselItem>
            {
              PROJECTS.map((project) => <CardProject key={project.id} project={project} />)
            }
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="text-white shadow shadow-zinc-700" />
        <CarouselNext className="text-white shadow shadow-zinc-700"/>
      </Carousel>
      
    </div>
  )
}