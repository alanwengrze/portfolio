import ellipseLight from "../assets/ellipseLight.svg"
import ellipseDark from "../assets/ellipseDark.svg"
import { useTheme } from "@/components/theme-provider"

interface EllipseBackgroundProps {
  className?: string
}
export function EllipseBackground({className}: EllipseBackgroundProps) {
  const {theme} = useTheme()
  return(
    <img 
      src={theme === "light" ? ellipseLight : ellipseDark} 
      alt="Elipse gradiente" 
      className={` absolute -z-20 object-cover duration-500 ${className}`}
      loading="lazy"
    />
  )
}