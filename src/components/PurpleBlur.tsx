import suaveBlur from '../assets/suaveBlur.svg'

interface PurpleBlurProps {
  className?: string
}
export function PurpleBlur({className}: PurpleBlurProps) {
  return(
    <img 
      src={suaveBlur} 
      alt="Ponto de luz roxa desfocado"
      className={`w-72 -z-10 absolute  animate-pulse duration-2000 ${className}`}
    />
  )
}