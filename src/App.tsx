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
import { Footer } from "./components/Footer"
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
          <Footer />
        </main>
      </section>
    </ThemeProvider>
    
  )
}

export default App