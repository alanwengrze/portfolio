import { IconBackground } from "@/components/IconBackground";
import { SiJavascript, SiNodedotjs, SiReact, SiShadcnui, SiStyledcomponents, SiTailwindcss, SiTypescript } from "react-icons/si";

export function StackHeader(){
  return(
    <header className="relative flex flex-col justify-center items-center gap-8 ">
    <div className=" flex gap-16">
      <IconBackground>
        <SiTailwindcss title="Tailwind CSS"/>
      </IconBackground>
      <IconBackground>
        <SiReact title="React"/>
      </IconBackground>
    </div>

    <div className="flex gap-8">
      <IconBackground>
        <SiTypescript title="TypeScript"/>
      </IconBackground>
      <IconBackground>
        <SiJavascript title="Javascript"/>
      </IconBackground>
      <IconBackground>
        <SiNodedotjs title="Nodejs"/>
      </IconBackground>
    </div>
  
    <div className="flex gap-16">
      <IconBackground>
        <SiStyledcomponents title="Styled Components"/>
      </IconBackground>
      <IconBackground>
        <SiShadcnui title="Shadcn UI"/>
      </IconBackground>
    </div>
  </header>
  )
}