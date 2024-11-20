import { NavMenu } from "./components/NavMenu"
import { Presentation } from "./page/Presentation" 
import { AboutMe } from "./page/AboutMe"
import { Projects } from "./page/Projects"

import { Title } from "./components/Title"
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";
import { Contact } from "./page/Contact"
import { ThemeProvider } from "./components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"
import { NetworkIcon } from "./page/Presentation/NetworkIcon"
import { SiGithub, SiLinkedin } from "react-icons/si"
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out-quart'
    });
  })
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <section className="mx-auto xl:w-10/12 px-4">
        <header>
          <NavMenu />
          <ModeToggle />
        </header>
        <main className="relative flex flex-col gap-4 border border-border rounded-md">
          <Presentation/>
          <section id="about" >
            <Title title="Sobre mim"/>
            <AboutMe />
          </section>
          <section id="projects">
            <Title title="Projetos recentes"/>
            <Projects />
          </section>
          <section id="contact">
            <Title title="Contato"/>
            <Contact />
          </section>
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
        </main>
      </section>
    </ThemeProvider>
    
  )
}

export default App