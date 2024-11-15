import suaveBlur from "../../assets/suaveBlur.svg"
import engine from "../../assets/engine.svg"
export function Presentation() {
  
  return (
    <div 
      className="bgImage overflow-hidden w-full h-screen flex justify-center items-center border-b border-opacity-40 border-zinc-800"
      id="presentation"
    >
      <div data-aos=" fade-right" className=" relative ">
        <p className="md:text-lg">Olá! Eu sou Alan Wengrze</p>
        <h1 className="text-xl md:text-3xl  ">Desenvolvedor fullstack.</h1>
      <img 
        src={suaveBlur} 
        alt="" 
        className="w-72 -z-10 absolute -top-24 right-0   animate-pulse duration-2000"
      />
      <img 
        src={suaveBlur} 
        alt="" 
        className=" w-72 -z-10 absolute bottom-0 right-24 animate-pulse duration-2000"
      />
      <img 
        src={suaveBlur} 
        alt="" 
        className="w-72 -z-10 absolute bottom-0 left-24 animate-pulse duration-2000"
      />
      <img src={engine} alt="" 
        className=" -z-10 absolute -bottom-8 right-0 animate-spin duration-2000"
      />
      </div>
     
    </div>
  )
}