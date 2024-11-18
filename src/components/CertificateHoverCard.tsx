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
      <HoverCardTrigger className=" hidden lg:block cursor-pointer p-4 rounded-full shadow-inner shadow-slate-600 hover:scale-105 duration-500 hover:saturate-50">
        <FaGraduationCap />
      </HoverCardTrigger>
      <HoverCardContent className="z-10 cardBorder p-4 mt-2  rounded-md  bg-background w-max flex flex-col gap-2">
        <h3 className="text-white text-opacity-90">{certificate.title}</h3>
        <p className="w-96">{certificate.description}</p>
        <h2 className="mt-4">{certificate.institution}
        </h2>
        <a 
          href={certificate.link} 
          target="_blank"
          className="link bottom-4"
        >Ver certificado <FaExternalLinkAlt /></a>
          
      </HoverCardContent>
    </HoverCard>
  )
}