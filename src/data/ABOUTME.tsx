import { CertificateHeader } from "@/page/AboutMe/CertificateHeader"
import { MyselfHeader } from "@/page/AboutMe/MyselfHeader"
import { StackHeader } from "@/page/AboutMe/StackHeader"
import { AllSkillsHeader } from "@/page/AboutMe/AllSkillsHeader"
import { CERTIFICATE } from "./CERTIFICATE"
interface AboutMe {
  id: number,
  header:React.ReactNode,
  title: string,
  description: string,
  certificates?: {title: string, institution: string, link: string}[]
}

export const ABOUTME: AboutMe[] = [
  {
    id: 1,
    title: "Olá! Eu sou Alan Wengrze",
    header: <MyselfHeader />,
    description: "Conheci a programação em 2019, mas acabei por seguir outro caminho. Em 2023 decidi que me dedicaria 100% ao desenvolvimento web. Hoje, meu foco é criar aplicações modernas, de alta performance e principalmente, acessíveis para todos."
  },
  {
    id: 2,
    title: "Tecnologias que utilizo no meu dia-a-dia",
    header: <StackHeader />,
    description: "Atualmente, estou me especializando nas tecnologias que englobam o universo Javascript. Porém, não me prendo a tecnologia. Utilizo o que me oferece maior flexibilidade, produtividade e escalabilidade."
  },
  {
    id: 3,
    title: "Todas as tecnologias",
    header: <AllSkillsHeader  />,
    description: "Essas são todas as tecnologias que tenho experiência. Com elas, posso construir projetos que vão atender as suas necessidades. Projetos completamente responsivos, com design moderno, performance, acessibilidade e segurança. Além da considerável facilidade de manutenção e escala.",
  },
  {
    id: 4,
    title: "Certificações",
    header: <CertificateHeader />,
    description: "Aqui estão algumas das certificações mais recentes que adquiri durante minha jornada de aprendizado:",
    certificates: CERTIFICATE
  },
 

]