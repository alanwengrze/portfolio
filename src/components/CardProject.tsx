import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import suaveBlur from "../assets/suaveBlur.svg"
import { IconBackground } from "./IconBackground";
import { SiNodedotjs } from "react-icons/si";
import { Project } from "@/data/PROJECTS";
import { SKILLS } from "@/data/SKILLS";

interface CardProjectProps {
  project: Project
}

export function CardProject({project}: CardProjectProps) {
  return(
    <div>
      <Card className="bgImage cardBorder z-10 bg-inherit relative overflow-hidden">
        <CardHeader>
          <CardTitle className="titleCard md:text-2xl">{project.title}</CardTitle>
          <CardDescription className="text-zinc-400 pr-8 text-pretty font-light md:text-lg">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="text-orange-200">
          <h2 className="titleCard">Tecnologias usadas</h2>
          <div className="flex gap-2 flex-wrap">
          {
            project.techs.map((tech) => (
              <IconBackground key={tech}>
                {SKILLS.find((skill) => skill.name === tech)?.icon}
              </IconBackground>
            ))
          }
          </div>
        </CardContent>
        <img className="w-48 -z-10 absolute bottom-0 -left-6 filter  rounded-md xs:"  
          src={suaveBlur} 
          alt="" 
        />
      </Card>
    </div>
  )
}