import { NavMenu } from "./components/NavMenu"
import { Presentation } from "./page/Presentation" 
import { AboutMe } from "./page/AboutMe"
import { Projects } from "./page/Projects"

import { Title } from "./components/Title"
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";
import spotlight from "./assets/spotlight.svg"
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out-quart'
    });
  })
  return (
    <div className=" px-4 mx-auto xl:w-10/12">
      <NavMenu />
      <main className="relative  cardBorder rounded-md flex flex-col gap-4">
        <Presentation/>
        <div id="about" className="relative">
          <Title title="Sobre mim"/>
          <AboutMe />
        </div>
        <div>
          <Title title="Projetos recentes"/>
          <Projects />
        </div>
        <img src={spotlight} alt="" 
        className="w-72 -z-10 absolute top-0 right-0 animate-pulse duration-2000"
        />
      </main>
    </div>
  )
}

export default App