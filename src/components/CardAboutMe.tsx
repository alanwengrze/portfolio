import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import suaveBlur from "../assets/suaveBlur.svg"
import spotlightOrange from "../assets/spotlightOrange.svg"

interface CardAboutMeProps {
  children?: React.ReactNode
}
export function CardAboutMe({children}: CardAboutMeProps) {
  return(
    <div>
      <Card className=" titleCard bgImage cardBorder z-10 bg-inherit relative overflow-hidden  ">
        {children}
        {/* <img className="w-48 -z-10 absolute bottom-0  filter  rounded-md xs:"  
          src={suaveBlur} 
          alt="" 
        /> */}
        <img src={spotlightOrange} alt="" 
          className="w-72 -z-10 absolute top-0 right-0 animate-pulse duration-2000"
        />
      </Card>
    </div>
  )
}