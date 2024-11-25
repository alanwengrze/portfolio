import { Carousel, CarouselContent } from "./ui/carousel";
interface CarouselSkillsProps {
  children: React.ReactNode
}
export function CarouselSkills({children}: CarouselSkillsProps) {
  return(
    <Carousel 
          className="w-auto flex sm:hidden "
          opts={{
            slidesToScroll: 5,
            align: "start"
          }}
        >
      <CarouselContent className="flex gap-6">
          {children}
      </CarouselContent>
    </Carousel>
  )
}