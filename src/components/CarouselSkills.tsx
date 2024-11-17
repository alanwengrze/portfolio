import { Carousel, CarouselContent } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
interface CarouselSkillsProps {
  children: React.ReactNode
}
export function CarouselSkills({children}: CarouselSkillsProps) {
  return(
    <Carousel 
          className="w-auto flex sm:hidden pointer-events-none"
          opts={{
            slidesToScroll: 1,
            align: "start"
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false
            })
          ]}
        >
      <CarouselContent className="flex gap-6">
          {children}
      </CarouselContent>
      </Carousel>
  )
}