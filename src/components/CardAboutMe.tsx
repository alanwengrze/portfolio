import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { ABOUTME } from "@/data/ABOUTME"
import spotlightOrange from "../assets/spotlightPurple.svg"
import { Certificates } from "@/page/AboutMe/Certificates";

export function CardAboutMe() {
  return(
    <div aria-label="Sobre mim" className="px-4 grid gird-cols-1 gap-4 lg:grid lg:grid-cols-2 lg:auto-rows-auto ">
      {
        ABOUTME.map((aboutme) => (
          <Card key={aboutme.id} className={` bg-inherit relative overflow-hidden mx-auto `}>
          <CardContent className=" flex flex-col mt-12">
            {aboutme.header}
            <section className="mt-12">
              <CardTitle className="">{aboutme.title}</CardTitle>
              <CardDescription className="cardDescription my-4">{aboutme.description}</CardDescription>

              {
                aboutme.certificates && (
                  <Certificates />
                )
              }
            </section>
          </CardContent>
            
          <img 
            src={spotlightOrange} 
            alt="Raio de luz laranja" 
            className=" -z-10 absolute top-0 right-0 animate-pulse duration-2000 "
          />
          </Card>
        ))
      }
    </div>
  )
}