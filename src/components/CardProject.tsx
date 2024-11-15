import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import suaveBlur from "../assets/suaveBlur.svg"
import { IconBackground } from "./IconBackground";
import { SiNodedotjs, SiReact } from "react-icons/si";


interface CardProjectProps {
  children: React.ReactNode
}
export function CardProject({children}: CardProjectProps) {
  return(
    <div>
      <Card className="bgImage cardBorder z-10 bg-inherit relative overflow-hidden  ">
        <CardHeader>
          <CardTitle className="titleCard md:text-2xl">Calculadora</CardTitle>
          <CardDescription className="text-zinc-400 pr-8 text-pretty font-light md:text-lg">Project description Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vel suscipit eius dolore, adipisci dolorum rerum, laudantium ipsam ad dignissimos quam nam laborum, culpa vero debitis omnis esse nihil magnam!</CardDescription>
        </CardHeader>
        <CardContent className="text-orange-200">
          <h2 className="titleCard">Tecnologias usadas</h2>
          <div className="flex gap-2 flex-wrap">
            <IconBackground>
              <SiReact title="React"/>
            </IconBackground>
            <IconBackground>
              <SiNodedotjs title="Node.js" />
            </IconBackground>
          </div>
        </CardContent>
        <img className="w-48 -z-10 absolute bottom-0 -left-6 filter  rounded-md xs:"  
          src={suaveBlur} 
          alt="" 
        />
      </Card>
    </div>
  )
}