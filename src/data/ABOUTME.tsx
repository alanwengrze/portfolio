import { CertificateHeader } from "@/page/AboutMe/CertificateHeader"
import { MyselfHeader } from "@/page/AboutMe/MyselfHeader"
import { StackHeader } from "@/page/AboutMe/StackHeader"
import { AllSkillsHeader } from "@/page/AboutMe/AllSkillsHeader"
import { CERTIFICATE } from "./CERTIFICATE"
interface AboutMe {
  id: string,
  header:React.ReactNode,
  title: string,
  description: string,
  certificates?: {title: string, institution: string, link: string}[]
}

export const ABOUTME: AboutMe[] = [
  {
    id: Math.random().toString(),
    title: "Olá! Eu sou Alan Wengrze",
    header: <MyselfHeader />,
    description: "Comecei os estudos de desenvolvimento web em 2019, mas foi a partir de 2023 que comecei a me dedicar ao desenvolvimento fullstack. No início de 2024, iniciei a leitura do livro 'Hábitos atômicos', livro esse que me motivou a criar novos hábitos, desde então eu tenho me dedicado a criar bons hábitos para me tornar um desenvolvedor e uma pessoa melhor todos os dias."
  },
  {
    id: Math.random().toString(),
    title: "Tecnologias que utilizo no meu dia-a-dia",
    header: <StackHeader />,
    description: "Atualmente, estou me especializando nas tecnologias que englobam o universo Javascript. Gosto de me manter atualizado nas novas tecnologias e estou sempre buscando novas maneiras de melhorar minhas habilidades."
  },
  {
    id: Math.random().toString(),
    title: "Todas as tecnologias",
    header: <AllSkillsHeader  />,
    description: "Essas são todas as tecnologias que tenho experiência. Busco me manter sempre atualizado e alinhado com a demanda do mercado.",
  },
  {
    id: Math.random().toString(),
    title: "Certificações",
    header: <CertificateHeader />,
    description: "Aqui estão algumas das certificações mais recentes que adquiri durante minha jornada de aprendizado:",
    certificates: CERTIFICATE
  },
 

]