import { NavMenu } from "./components/NavMenu"
import { Presentation } from "./page/Presentation" 
import { AboutMe } from "./page/AboutMe"
import { Projects } from "./page/Projects"
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
    <div className="max-w-6xl p-4 mx-auto ">
      <NavMenu />
      <main className="relative mt-16 cardBorder rounded-md flex flex-col gap-4">
        <Presentation/>
        <div id="about" className="relative">
          <h1 className="px-4 my-8 font-bold">Sobre mim</h1>
          <AboutMe />
        </div>
        
        <Projects />

        <img src={spotlight} alt="" 
        className="w-72 -z-10 absolute top-0 right-0 animate-pulse duration-2000"
        />
      </main>
    </div>
  )
}

export default App