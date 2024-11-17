import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import suaveBlur from "../assets/suaveBlur.svg"
import { IconBackground } from "./IconBackground";
import { Project } from "@/data/PROJECTS";
import { SKILLS } from "@/data/SKILLS";
import { CarouselItem } from "./ui/carousel";
import { CarouselSkills } from "./CarouselSkills";
interface CardProjectProps {
  project: Project
}

export function CardProject({project}: CardProjectProps) {
  return(
    <div>
      <Card className="bgImage cardBorder mb-8 z-10 bg-inherit relative overflow-hidden flex flex-col h-full">
      <CardHeader>
          <CardTitle className="titleCard md:text-2xl">{project.title}</CardTitle>
          <CardDescription className="text-zinc-400 pr-8 text-pretty font-light md:text-lg xl:h-36">{project.description}</CardDescription>
        </CardHeader>
        <div className="my-8">{project.image}</div>
        <CardContent className="text-orange-200 mt-8">
          <h2 className="titleCard ">Tecnologias usadas</h2>
          <CarouselSkills>
            {
              project.techs.map((tech) => (
                <CarouselItem key={tech} className="basis-2/12">
                  <IconBackground key={tech}>
                    {SKILLS.find((skill) => skill.name === tech)?.icon}
                  </IconBackground>
                </CarouselItem>
              ))
            }
          </CarouselSkills>
          <div className="hidden gap-2 mt-4 sm:flex ">
          {
            project.techs.map((tech) => (
              <IconBackground key={tech}>
                {SKILLS.find((skill) => skill.name === tech)?.icon}
              </IconBackground>
            ))
          }
          </div>
        </CardContent>
        <img className="w-24 -z-10 absolute bottom-16 -left-6 filter  rounded-md xs:"  
          src={suaveBlur} 
          alt="" 
        />
      </Card>
    </div>
  )
}