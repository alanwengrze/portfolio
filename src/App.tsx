import { NavMenu } from "./components/NavMenu"
import { Presentation } from "./page/Presentation" 
import { AboutMe } from "./page/AboutMe"
import { Projects } from "./page/Projects"

import { Title } from "./components/Title"
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";
import spotlight from "./assets/spotlight.svg"
import { Contact } from "./page/Contact"
import { ThemeProvider } from "./components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out-quart'
    });
  })
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className=" px-4 mx-auto xl:w-10/12">
        <main className="relative border border-border rounded-md flex flex-col gap-4">
          <div>
            <NavMenu />
            <ModeToggle />
          </div>
          <Presentation/>
          <div id="about" className="relative">
            <Title title="Sobre mim"/>
            <AboutMe />
          </div>
          <div id="projects">
            <Title title="Projetos recentes"/>
            <Projects />
          </div>
          <div id="contact">
            <Title title="Contato"/>
            <Contact />
          </div>
          <img src={spotlight} alt="Raio de luz branca" 
          className="w-72 -z-10 absolute top-0 right-0 animate-pulse duration-2000"
          />
        </main>
      </div>
    </ThemeProvider>
    
  )
}

export default App