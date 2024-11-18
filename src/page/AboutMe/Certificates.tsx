import { CertificateHoverCard } from "@/components/CertificateHoverCard"
import { CERTIFICATE } from "@/data/CERTIFICATE"
export function Certificates() {
  return(
    // desktop
    <div className="flex gap-4 flex-wrap">
      {CERTIFICATE.map((certificate) => <CertificateHoverCard key={certificate.id} certificate={certificate} />)}

      <div className="block lg:hidden">
        <nav className="flex gap-2 flex-wrap">
          {
          CERTIFICATE.map((certificate) => (
          <a 
            href={certificate.link} 
            target="_blank" 
            key={certificate.id} 
            className="text-sm text-purple-300 text-opacity-75 px-2 py-1 rounded-md bg-inherit shadow-inner shadow-slate-600 hover:scale-105 duration-500 hover:saturate-50"
          >{certificate.title}
          </a>))
          }
        </nav>
      </div>
    </div>
  )
}