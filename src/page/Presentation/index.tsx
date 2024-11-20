import engine from "../../assets/engine.svg"
import { Network } from "./Network"
import { EllipseBackground } from "./EllipseBackground"

export function Presentation() {
  return (
    <div className="relative overflow-hidden">
      <section
      arai-label="Página inicial"
      className=" bgImage overflow-hidden w-full h-screen flex flex-col items-center justify-center border-b border-border"
      id="presentation"
    >
      <section 
        aria-label="Apresentação"
        data-aos="fade-in" 
        className="relative"
      >
        <p className="md:text-xl">Olá! Eu sou Alan Wengrze</p>
        <h1 className="text-xl font-extrabold md:text-4xl  text-primary-foreground">Desenvolvedor fullstack.</h1>
        {/* <PurpleBlurHome /> */}
        <img 
          src={engine} 
          alt="Engrenagem com animação de rotação" 
          className="w-8 -z-10 absolute -top-8 left-0 animate-spin duration-2000 md:w-14 md:right-0 md:left-auto "
        />
        
      </section>
      <Network />
      <EllipseBackground 
        className="w-52 h-52 -bottom-16 -right-8"
      />
       <EllipseBackground 
        className="w-52 h-52 -top-8 -right-8"
      />
    </section>
    </div>
  )
}