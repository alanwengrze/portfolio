import engine from "../../assets/engine.svg"
import { PurpleBlurHome } from "@/components/PurpleBlurHome"

export function Presentation() {
  return (
    <div
      arai-label="Página inicial"
      className="dark:bgImage overflow-hidden w-full flex flex-col items-center justify-center h-80 border-b border-border sm:h-screen"
      id="presentation"
    >
      <div aria-label="Apresentação" data-aos="fade-down" className=" relative ">
        <p className="md:text-xl">Olá! Eu sou Alan Wengrze</p>
        <h1 className="text-xl font-extrabold md:text-4xl  text-primary-foreground">Desenvolvedor fullstack.</h1>
      <PurpleBlurHome />
      <img src={engine} alt="Engrenagem com animação de rotação" 
        className="w-8 -z-10 absolute -top-8 left-0 animate-spin duration-2000 md:w-14 md:right-0 md:left-auto"
      />
      </div>
     
    </div>
  )
}