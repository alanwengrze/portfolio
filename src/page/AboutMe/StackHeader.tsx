import { IconBackground } from "@/components/IconBackground";
import { SKILLS } from "@/data/SKILLS";
export function StackHeader(){
  return(
    <header className="relative flex flex-col justify-center items-center gap-8 ">
    <div className="w-full flex justify-between sm:justify-center sm:gap-16">
      <IconBackground>
      {SKILLS.find((skill) => skill.name === "Tailwind CSS")?.icon}
      </IconBackground>
      <IconBackground>
      {SKILLS.find((skill) => skill.name === "React")?.icon}
      </IconBackground>
    </div>

    <div className="w-full flex justify-between gap-4 sm:gap-16 sm:justify-center">
      <IconBackground>
      {SKILLS.find((skill) => skill.name === "Typescript")?.icon}
      </IconBackground>
      <IconBackground>
      {SKILLS.find((skill) => skill.name === "Javascript")?.icon}
      </IconBackground>
      <IconBackground>
        {SKILLS.find((skill) => skill.name === "Node.js")?.icon}
      </IconBackground>
    </div>
  
    <div className="w-full flex justify-between sm:justify-center sm:gap-16">
      <IconBackground>
      {SKILLS.find((skill) => skill.name === "Styled Components")?.icon}
      </IconBackground>
      <IconBackground>
      {SKILLS.find((skill) => skill.name === "Shadcn UI")?.icon}
      </IconBackground>
    </div>
  </header>
  )
}