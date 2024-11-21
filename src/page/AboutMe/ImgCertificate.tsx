import { useTheme } from "@/components/theme-provider"
import certificateLight from "../../assets/certificateLight.svg"
import certificateDark from "../../assets/certificateDark.svg"

interface ImgCertificateProps {
  className?: string
}
export function ImgCertificate({ className}: ImgCertificateProps) {
  const {theme} = useTheme()
  return (
    <img src={theme === "dark" ? certificateDark : certificateLight} alt="Imagem de certificado" className={`bgStyleIcon dark:iconShadowDark border-opacity-80 rounded-full w-48 -z-10 mx-auto ${className}` } loading="lazy"  /> 
  )
}