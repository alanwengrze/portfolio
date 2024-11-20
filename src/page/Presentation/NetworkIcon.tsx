import { IconBackground } from "@/components/IconBackground"

interface NetworkIconProps {
  children: React.ReactNode
  link: string
  className: string
}
export function NetworkIcon({children, link, className}: NetworkIconProps) {
  return(
    <a href={link} target="_blank" rel="noopener noreferrer" className={`rounded-md duration-100 ${className}`} >
      <IconBackground>
        {children}
      </IconBackground>
    </a>
  )
}