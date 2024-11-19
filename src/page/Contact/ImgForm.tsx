import { useTheme } from "@/components/theme-provider"; 
export function ImgForm() {
  const {theme} = useTheme()
  return(
    <img loading="lazy" src={theme === "dark" ? "./lava-form.webp" : "./purple-form.webp"} alt="ondulações em roxo e azul" 
      className="hidden w-1/2 bg-cover min-h-[650px] max-h-[800px] object-cover rounded-r-md md:block"
    />
  )
}