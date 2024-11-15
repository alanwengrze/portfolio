import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card"
import { FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa"

interface CertificateHoverCardProps {
  title: string
  institution: string
  link: string
}
export function CertificateHoverCard({title, institution, link}: CertificateHoverCardProps) {
  return(
      <HoverCard>
        <HoverCardTrigger className="cursor-pointer p-4 bg-inherit rounded-full shadow-inner shadow-slate-600 hover:scale-105 duration-500 hover:saturate-50">
          <FaGraduationCap />
        </HoverCardTrigger>
        <HoverCardContent className="cardBorder flex justify-between w-auto bg-inherit p-4">
          <div>
            <h2>{title}</h2>
            <p>{institution}</p>
          </div>
          <a href={link} target="_blank">Ver certificado <FaExternalLinkAlt /></a>
        </HoverCardContent>
    </HoverCard>
  )
}