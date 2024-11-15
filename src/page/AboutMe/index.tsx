import { CardAboutMe } from "../../components/CardAboutMe"
import { SiReact, SiNodedotjs, SiTypescript, SiJavascript, SiTailwindcss, SiStyledcomponents, SiShadcnui } from "react-icons/si"
import { IconBackground } from "@/components/IconBackground"
import suaveBlur from "../../assets/suaveBlur.svg" 
import certificate from "../../assets/certificate.svg"
export function AboutMe() {
  return (
    <div 
      className="relative  px-4 w-full h-auto flex flex-col justify-center items-center gap-4 md:grid md:grid-flow-dense md:grid-cols-2 md:items-start"
    >
      <div className="">
        <CardAboutMe>
          <div className=" w-fit mx-auto p-4 bg-inherit rounded-full shadow-inner shadow-slate-600">
            <img 
              src="https://github.com/AlanWengrze.png" alt="Foto de Alan Wengrze" 
              className=" w-40 border-e-2 border-orange-100 border-opacity-80 rounded-full  filter brightness-50 hover:grayscale duration-500"
            />
            <img className="absolute top-8 w-56 -z-10   filter rounded-md xs:"  
              src={suaveBlur} 
              alt="" 
            />
          </div>
          <div>
            <h2>Olá! Eu sou Alan Wengrze </h2>
            <p>Comecei os estudos de desenvolvimento web em 2019, mas foi a partir de 2023 que comecei a me dedicar ao desenvolvimento fullstack. No início de 2024, iniciei a leitura do livro "Hábitos atômicos", livro esse que me motivou a criar novos hábitos, desde então eu tenho me dedicado a criar bons hábitos para me tornar um desenvolvedor e uma pessoa melhor todos os dias.</p>
          </div>
        </CardAboutMe>
      </div>
      <div className=" col-span-2 lg:col-span-1 ">
        <CardAboutMe>
          <div className="relative flex flex-col justify-center items-center gap-8 ">
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
            <img className="w-48 -z-20 absolute     filter blur-xl  rounded-md"  
              src={suaveBlur} 
              alt="" 
            />
          </div>
         <div>
          <h2 className="text-md">Stack atual </h2>
          <p>Atualmente, estou me especializando nas tecnologias que englobam o universo Javascript. Gosto de me manter atualizado nas novas tecnologias e estou sempre buscando novas maneiras de melhorar minhas habilidades.</p>
         </div>
        </CardAboutMe>
      </div>
      <div className="">
        <CardAboutMe>
          <div className="relative flex">
            <img 
              src={certificate} 
              alt=""
              className="w-48 -z-10 mx-auto"
            />
            <img className="w-48 absolute -z-10 filter blur-lg rounded-md top-0 left-1/4"
              src={suaveBlur} 
              alt="" 
            />
          </div>
          
          <div>
            <h2 className="titleCard text-md">Certificações</h2>
            <p className="text-sm">Aqui estão algumas das certificações mais recentes que adquiri durante minha jornada de aprendizado:</p>
          </div>
        </CardAboutMe>
      </div>
    </div>
  )
}
