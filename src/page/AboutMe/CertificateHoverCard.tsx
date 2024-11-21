import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card"
import { FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa"
interface CertificateHoverCardProps {
  certificate: {
    title: string
    institution: string
    link: string
    description: string
  }
}
export function CertificateHoverCard({certificate}: CertificateHoverCardProps) {
  return(
    // certificates desktop
    <HoverCard>
      <HoverCardTrigger href={certificate.link}	aria-label={certificate.title} target="_blank" className=" hidden lg:block cursor-pointer p-4 rounded-full shadow-md dark:iconShadowDark hover:scale-105 duration-500 hover:saturate-50">
        <FaGraduationCap />
      </HoverCardTrigger>
      <HoverCardContent className="z-10 border border-border p-4 mt-2  rounded-md  bg-background w-max flex flex-col gap-2">
        <h2 className="customTitleCard md:text-lg">{certificate.title}</h2>
        <p className="w-96">{certificate.description}</p>
        <h2 className="mt-4 text-primary-foreground">{certificate.institution}
        </h2>
        <a 
          href={certificate.link} 
          target="_blank"
          className="link absolute bottom-4 right-4 flex"
        >Ver certificado <FaExternalLinkAlt /></a>
          
      </HoverCardContent>
    </HoverCard>
  )
}