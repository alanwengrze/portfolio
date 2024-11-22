import { Footer } from "@/components/Footer";
import { Contact } from "./Contact";
import { Title } from "@/components/Title";
import { Projects } from "./Projects";
import { AboutMe } from "./AboutMe";
import { Presentation } from "./Presentation";
import { ModeToggle } from "@/components/mode-toggle";
import { NavMenu } from "@/components/NavMenu";

export default function AllContent(){
  return(
    <section
        className="relative mx-auto xl:w-10/12 px-4 scroll-smooth duration-1000"
      >
      <header className="z-50 top-0 sticky flex justify-between items-center p-2 bg-background/70 backdrop-blur-lg border border-border">
        <NavMenu />
        <ModeToggle />
      </header>
      <main className="relative flex flex-col gap-4 border border-border rounded-md">
        <section >
          <Presentation
          />
        </section>
        
        <section
          id="about"
        >
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
  )
}