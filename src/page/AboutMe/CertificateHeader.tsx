import certificate from "../../assets/certificate.svg"
export function CertificateHeader() {
  return(
    <header className="relative flex">
      <img 
        src={certificate} 
        alt=""
        className="border-e-2 border-orange-100 border-opacity-80 rounded-full shadow-inner shadow-slate-600 w-48 -z-10 mx-auto"
      />
    </header>
  )
}