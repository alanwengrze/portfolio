import { CardAboutMe } from "../../components/CardAboutMe"
import { ABOUTME } from "@/data/ABOUTME"
import { Certificates } from "./Certificates"
export function AboutMe() {
  return (
    <div 
      className="relative  px-4 w-full h-auto flex flex-col justify-center items-center gap-4 md:grid md:grid-flow-dense md:grid-cols-2 md:items-start"
    >
      {
        ABOUTME.map((aboutme) => {
          return(
            <CardAboutMe key={aboutme.title}>
              {aboutme.header}
              <h2 className="text-2xl font-bold">{aboutme.title}</h2>
              <p>{aboutme.description}</p>

            {
              aboutme.certificates && (
                <Certificates />
              )
            }
            </CardAboutMe>
          )
        })
      }
    </div>
  )
}
