import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si"
import { NetworkIcon } from "./NetworkIcon"
import { EllipseBackground } from "./EllipseBackground"
export function Network() {
  return(
    <section className="relative">
      <nav className="flex gap-2 mt-52 justify-center text-primary-foreground">
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
      <NetworkIcon 
        link="mailto:alanwengrzee@gmail.com"
        className="hover:text-red-500"
        children={<SiGmail title="Gmail"/>}
      />
      </nav>
      <EllipseBackground 
        className="w-52 -bottom-4"
      />
    </section>
  )
}