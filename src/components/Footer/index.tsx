import { SiGithub, SiLinkedin } from "react-icons/si";
import { NetworkIcon } from "@/components/NetworkIcon";

export function Footer(){
  return(
    <footer className="w-full h-32 flex flex-col justify-center gap-4">
    <nav className="flex gap-2 justify-center text-primary-foreground"> 
      <NetworkIcon 
        link="https://github.com/AlanWengrze"
        className="hover:text-primary/100"
        children={<SiGithub title="Github"/>}
      />
      <NetworkIcon 
        link="https://www.linkedin.com/in/alanwengrze/"
        className="hover:text-blue-500"
        children={<SiLinkedin title="Linkedin"/>}
      />
    </nav>
    <p className="text-center">Desenvolvido por Alan Wengrze &copy; 2024</p>
    </footer>
  )
}