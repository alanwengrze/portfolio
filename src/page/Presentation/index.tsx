import engine from "../../assets/engine.svg"
import { PurpleBlurHome } from "@/components/PurpleBlurHome"
export function Presentation() {
  
  return (
    <div 
      className="bgImage overflow-hidden w-full h-screen flex justify-center items-center border-b border-opacity-40 border-zinc-800"
      id="presentation"
    >
      <div data-aos=" fade-right" className=" relative ">
        <p className="md:text-lg">Olá! Eu sou Alan Wengrze</p>
        <h1 className="text-xl md:text-3xl  ">Desenvolvedor fullstack.</h1>
      <PurpleBlurHome />
      <img src={engine} alt="" 
        className="w-8 -z-10 absolute -top-8 left-0 animate-spin duration-2000 md:w-14 md:right-0 md:left-auto"
      />
      </div>
     
    </div>
  )
}