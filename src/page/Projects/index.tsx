import { CardProject } from "@/page/Projects/CardProject"
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
    <section aria-label="Projetos" className="px-4 w-full h-full">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }} 
      >
        <CarouselContent className="mb-4">
          {
            PROJECTS.map((project) => 
            <CarouselItem key={project.id} className=" lg:basis-1/2">
             <CardProject  project={project} />
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious className="text-foreground shadow-md hover:text-background" />
        <CarouselNext className="text-foreground  shadow-md hover:text-background"/>
      </Carousel>
      
    </section>
  )
}