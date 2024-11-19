import certificate from "../../assets/certificate.svg"
export function CertificateHeader() {
  return(
    <header className="relative flex">
      <img 
        src={certificate} 
        alt="Imagem de certificado"
        className="bgStyleIcon dark:iconShadowDark border-opacity-80 rounded-full w-48 -z-10 mx-auto"
      />
    </header>
  )
}