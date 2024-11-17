import { SKILLS } from "../../data/SKILLS";
import { IconBackground } from "../../components/IconBackground";
import {  
  Carousel,
  CarouselContent,
  CarouselItem
 } from "@/components/ui/carousel"
export function AllSkillsHeader() {
  return(
    <>
      <header className="">
        <Carousel 
          className="w-52 mx-auto flex justify-center sm:hidden "
          opts={{
            slidesToScroll: 5,
          }}
        >
          <CarouselContent className="flex gap-6">
              { SKILLS.map((skill) =>
                  <CarouselItem key={skill.name} className="basis-2/12" >
                    <IconBackground >
                  {skill.icon}
                    </IconBackground>
                  </CarouselItem>
                )
              }
          </CarouselContent>
        </Carousel>
      </header>

      <header className="hidden w-full mx-auto relative  justify-center flex-wrap items-center gap-8 sm:flex ">
      {
        SKILLS.map((skill) => 
        <IconBackground key={skill.name}>
        {skill.icon}
        </IconBackground>
        )
      }
      </header>
    </>
    
  )
}