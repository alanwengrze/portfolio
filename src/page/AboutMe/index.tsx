import { CardAboutMe } from "../../components/CardAboutMe"
import { CardContent } from "@/components/ui/card"
import { SiReact, SiNodedotjs, SiTypescript, SiJavascript, SiTailwindcss, SiStyledcomponents, SiShadcnui } from "react-icons/si"
import { IconBackground } from "@/components/IconBackground"
import suaveBlur from "../../assets/suaveBlur.svg" 

export function AboutMe() {
  return (
    <div 
      className="aboutGrid px-4 w-full flex flex-col justify-center items-center gap-4 md:grid md:grid-flow-dense md:grid-cols-2 "
      id="about"
    >
      <div className="">
        <CardAboutMe>
          <CardContent className="mt-4 text-orange-200">
            <h2 className=" text-md">Olá! Eu sou Alan Wengrze </h2>
            <p className="text-sm">Comecei os estudos de desenvolvimento web em 2019, mas foi a partir de 2023 que comecei a me dedicar ao desenvolvimento fullstack.</p>
          </CardContent>
        </CardAboutMe>
      </div>
      <div className=" col-span-2 lg:col-span-1 ">
        <CardAboutMe>
          <CardContent className="mt-4 text-orange-200">
            <div className="relative flex flex-col justify-center items-center gap-8 my-10">
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
                  <SiStyledcomponents title="Nodejs"/>
                </IconBackground>
                <IconBackground>
                  <SiShadcnui title="Shadcn UI"/>
                </IconBackground>
              </div>
              <img className="w-48 -z-20 absolute     filter blur-xl  rounded-md xs:"  
                src={suaveBlur} 
                alt="" 
              />
            </div>
            <h2 className="text-md">Stack atual </h2>
            <p>Atualmente, estou me especializando nas tecnologias que englobam o universo Javascript. Me atualizo diariamente para adquirir novas habilidades e conhecimentos e me manter por dentro das novidades do mercado.</p>
          </CardContent>
         
        </CardAboutMe>
      </div>
      <div className="">
        <CardAboutMe>
          <CardContent className="mt-4 text-orange-200">
            <h2 className="titleCard text-md">Olá! Eu sou Alan Wengrze </h2>
            <p className="text-sm">Comecei os estudos de desenvolvimento web em 2019, mas foi a partir de 2023 que comecei a me dedicar ao desenvolvimento fullstack.</p>
          </CardContent>
        </CardAboutMe>
      </div>
      <div className="">
        <CardAboutMe>
          <CardContent className="mt-4 text-orange-200">
            <h2 className="titleCard text-md">Olá! Eu sou Alan Wengrze </h2>
            <p className="text-sm">Comecei os estudos de desenvolvimento web em 2019, mas foi a partir de 2023 que comecei a me dedicar ao desenvolvimento fullstack.</p>
          </CardContent>
        </CardAboutMe>
      </div>
    </div>
  )
}
