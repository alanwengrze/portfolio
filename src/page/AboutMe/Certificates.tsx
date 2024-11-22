import { CertificateHoverCard } from "@/page/AboutMe/CertificateHoverCard"
import { CERTIFICATE } from "@/data/CERTIFICATE"
export function Certificates() {
  return(
    // desktop
    <div className="flex gap-4 flex-wrap">
      {CERTIFICATE.map((certificate) => <CertificateHoverCard key={certificate.id} certificate={certificate} />)}

      {/* mobile */}
      <div className="block xl:hidden mb-4">
        <nav className="grid grid-flow-rows grid-cols-2 auto-cols-min gap-2 md:grid-cols-3">
          {
          CERTIFICATE.map((certificate) => (
          <a 
            href={certificate.link} 
            target="_blank" 
            key={certificate.id} 
            className="bgStyleIcon dark:iconShadowDark text-sm text-primary-foreground text-opacity-75 px-2 py-1 rounded-md  hover:scale-105 duration-500 hover:saturate-50"
          >{certificate.title}
          </a>))
          }
        </nav>
      </div>
    </div>
  )
}