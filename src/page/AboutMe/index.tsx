import { lazy } from "react"

const CardAboutMe = lazy(() => import("./CardAboutMe"))
export function AboutMe() {
  return (
    <div 
      className="relative flex justify-center items-center"
    >
      <CardAboutMe/>
    </div>
  )
}
