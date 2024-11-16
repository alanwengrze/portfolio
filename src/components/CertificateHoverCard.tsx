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
    <HoverCard>
      <HoverCardTrigger className="relative hidden lg:block cursor-pointer p-4 bg-inherit rounded-full shadow-inner shadow-slate-600 hover:scale-105 duration-500 hover:saturate-50">
        <FaGraduationCap />
      </HoverCardTrigger>
      <HoverCardContent className="z-10 absolute cardBorder  w-max p-4 mt-2 rounded-md flex justify-between  bg-background ">
        <section className=" w-full flex flex-col gap-2">
          <h3 className="text-white text-opacity-90">{certificate.title}</h3>
          <p className="w-96">{certificate.description}</p>
          <h2 className="mt-4">{certificate.institution}</h2>
          <a 
            href={certificate.link} 
            target="_blank"
            className="flex items-center justify-end gap-2"
          ><span>Ver certificado</span> <FaExternalLinkAlt /></a>
        </section>
      </HoverCardContent>
    </HoverCard>
  )
}