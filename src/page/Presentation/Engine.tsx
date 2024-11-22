import { useTheme } from "@/components/theme-provider"
import engineLight from "../../assets/engineLight.svg"
import engineDark from "../../assets/engineDark.svg"
export function Engine(){
  const {theme} = useTheme()
  return(
    <img 
      src={theme === "dark" ? engineDark : engineLight} 
      alt="Engrenagem com animação de rotação" 
      className="w-8 -z-10 absolute -top-8 left-0 md:w-14 md:right-0 md:left-auto animate-in rotate-180 duration-1000"
      loading="lazy"
    />
  )
}