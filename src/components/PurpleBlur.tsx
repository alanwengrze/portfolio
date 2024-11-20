import suaveBlur from '../assets/circleBlurOrange.svg'

interface PurpleBlurProps {
  className?: string
}
export function PurpleBlur({className}: PurpleBlurProps) {
  return(
    <img 
      src={suaveBlur} 
      alt="Ponto de luz roxa desfocado"
      loading="lazy"
      className={`w-52 -z-10 absolute  animate-pulse duration-2000 ${className}`}
    />
  )
}