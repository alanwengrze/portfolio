import { Card, CardContent } from "./ui/card";

import spotlightOrange from "../assets/spotlightOrange.svg"

interface CardAboutMeProps {
  children?: React.ReactNode
}
export function CardAboutMe({children}: CardAboutMeProps) {
  return(
    <div>
      <Card className="titleCard bgImage cardBorder z-10 bg-inherit  py-8 relative overflow-hidden ">
      <CardContent className=" text-orange-200 flex flex-col gap-12">
        {children}
      </CardContent>
        
      <img 
        src={spotlightOrange} 
        alt="Ponto de luz roxo" 
        className=" -z-10 absolute top-0 right-0 animate-pulse duration-2000 "
      />
        
      </Card>
    </div>
  )
}