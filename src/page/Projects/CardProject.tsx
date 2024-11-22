import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { IconBackground } from "../../components/IconBackground";
import { Project } from "@/data/PROJECTS";
import { SKILLS } from "@/data/SKILLS";
import { CarouselItem } from "../../components/ui/carousel";
import { CarouselSkills } from "../../components/CarouselSkills";
import { FaExternalLinkAlt } from "react-icons/fa";
interface CardProjectProps {
  project: Project
}

export function CardProject({project}: CardProjectProps) {
  return(
    <>
      <Card 
        className="mb-8 z-10 bg-inherit overflow-hidden flex flex-col lg:h-full lg:justify-between"
        data-aos="fade-down"
      >
      <div aria-label="Imagem do projeto" className="mb-4">{project.image}</div>
      <CardHeader>
          <CardTitle className="mb-4">{project.title}</CardTitle>
          <CardDescription className="cardDescription ">{project.description}</CardDescription>
          <a 
            href={project.link}
            target="_blank"
            className="link absolute right-4 bottom-40"
          >Ver projeto  <FaExternalLinkAlt /></a>
      </CardHeader>
        <CardContent className="mt-8">
          <div aria-label="Tecnologias utilizadas" className="relative">
            <h2 className="customTitleCard my-4 md:my-8">Tecnologias utilizadas</h2>
          </div>

          {/* skills mobile */}
          <CarouselSkills>
            {
              project.techs.map((tech) => (
                <CarouselItem key={tech} className="basis-2/12 ">
                  <IconBackground key={tech}>
                    {SKILLS.find((skill) => skill.name === tech)?.icon}
                  </IconBackground>
                </CarouselItem>
              ))
            }
          </CarouselSkills>
          {/* skills desktop */}
          <div className="hidden gap-2 mt-4 sm:flex lg:flex-wrap">
          {
            project.techs.map((tech) => (
              <IconBackground key={tech}>
                {SKILLS.find((skill) => skill.name === tech)?.icon}
              </IconBackground>
            ))
          }
          </div>
        </CardContent>
      </Card>
    </>
  )
}