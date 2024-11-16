import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card"
import { FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa"
interface CertificateHoverCardProps {
  certificate: {
    title: string
    institution: string
    link: string
  }
}
export function CertificateHoverCard({certificate}: CertificateHoverCardProps) {
  return(
    <HoverCard>
      <HoverCardTrigger className="hidden lg:block cursor-pointer p-4 bg-inherit rounded-full shadow-inner shadow-slate-600 hover:scale-105 duration-500 hover:saturate-50">
        <FaGraduationCap />
      </HoverCardTrigger>
      <HoverCardContent className="cardBorder rounded-md flex justify-between w-auto bg-background p-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-white text-opacity-90">{certificate.title}</h3>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laboriosam, porro molestiae repudiandae cum, laudantium, aspernatur aliquid corrupti deserunt dolores commodi debitis! Reprehenderit ea atque dignissimos, maxime ut tempore unde!</p>
          <p>{certificate.institution}</p>
        </div>
        <a href={certificate.link} target="_blank">Ver certificado <FaExternalLinkAlt /></a>
      </HoverCardContent>
    </HoverCard> 
  )
}