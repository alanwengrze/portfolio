import { Network } from "./Network"
import { EllipseBackground } from "../../components/EllipseBackground"
import { Engine } from "./Engine"

export function Presentation() {
  return (
    <div className="relative overflow-hidden">
      <section
      arai-label="Página inicial"
      className=" bgImage w-full h-screen flex flex-col items-center justify-center border-b border-border"
      id="presentation"
    >
      <section
        aria-label="Apresentação"
        className="relative"
      >
        <p 
          className="md:text-xl my-4"
          data-aos="fade-down"
        >Olá! Eu sou Alan Wengrze</p>
        <h1 
          className="text-xl font-extrabold md:text-4xl  text-primary-foreground"
          data-aos="fade-up"
        >Desenvolvedor fullstack.</h1>
        <Engine />
        
      </section>
      <Network />
      <EllipseBackground 
        className="w-40 h-40 -bottom-16 -right-8 md:w-56 md:h-56"
      />
       <EllipseBackground 
        className="w-40 h-40 -top-8 -right-8 md:w-56 md:h-56"
      />
    </section>
    </div>
  )
}