import { SKILLS } from "../../data/SKILLS";
import { IconBackground } from "../../components/IconBackground";
export function AllSkillsHeader() {
  return(
    <header className="w-full mx-auto relative flex justify-center flex-wrap items-center gap-8 lg:w-1/2">
      {
        SKILLS.map((skill) => <IconBackground key={skill.name}>{skill.icon}</IconBackground>)
      }
    </header>
  )
}