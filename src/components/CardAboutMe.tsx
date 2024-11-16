import { Card, CardContent } from "./ui/card";
import { ABOUTME } from "@/data/ABOUTME"
import spotlightOrange from "../assets/spotlightOrange.svg"
import { Certificates } from "@/page/AboutMe/Certificates";

export function CardAboutMe() {
  return(
    <div className="">
      {
        ABOUTME.map((aboutme) => (
          <Card key={aboutme.id} className="titleCard bgImage cardBorder bg-inherit relative overflow-hidden ">
          <CardContent className=" flex flex-col mt-12">
            {aboutme.header}
            <section className="mt-12">
              <h2 className="text-2xl font-bold">{aboutme.title}</h2>
              <p className="my-4">{aboutme.description}</p>

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