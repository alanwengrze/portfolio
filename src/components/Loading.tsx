import { EllipseBackground } from "./EllipseBackground"
export function Loading() {
  return (
    <div className=" flex justify-center items-center h-screen xl:hidden">
      <EllipseBackground 
        className="w-40 h-40 animate-bounce rotate-45"
      />
    </div>
  )
}