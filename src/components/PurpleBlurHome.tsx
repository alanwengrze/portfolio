import { PurpleBlur } from "./purpleBlur" 
export function PurpleBlurHome() {
  return(
    <div area-label="purple-blur-home">
      <PurpleBlur 
        className="bottom-0 right-0 md:-bottom-8 md:right-4"
      />
      <PurpleBlur 
        className="-top-12 left-16 md:-top-8 md:-left-16"
      />
      <PurpleBlur 
        className="-top-12 right-16 md:-top-8 md:-right-16"
      />
    </div>
  )
}