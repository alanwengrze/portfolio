import { Card, CardContent, CardDescription, CardTitle } from "../../components/ui/card";
import { ABOUTME } from "@/data/ABOUTME"
import { Certificates } from "@/page/AboutMe/Certificates";
import { EllipseBackground } from "@/components/EllipseBackground";

export function CardAboutMe() {
  return(
    <div aria-label="Sobre mim" className="px-4 grid gird-cols-1 gap-4 lg:grid lg:grid-cols-2 lg:auto-rows-auto ">
      {
        ABOUTME.map((aboutme) => (
          <Card 
            key={aboutme.id} 
            className={` bg-inherit relative overflow-hidden mx-auto `}
            data-aos={`${aboutme.id === 4 ? "" : "fade-in"}`}
          >
          <CardContent className=" flex flex-col mt-12">
            {aboutme.header}
            <section className="mt-12">
              <CardTitle>{aboutme.title}</CardTitle>
              <CardDescription className="cardDescription my-4">{aboutme.description}</CardDescription>

              {
                aboutme.certificates && (
                  <Certificates />
                )
              }
            </section>
          </CardContent>
            
          <EllipseBackground 
            className="w-52 h-52 -bottom-44 -left-8"
          /> 
          </Card>
        ))
      }
    </div>
  )
}