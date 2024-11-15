
interface IconBackgroundProps {
  children: React.ReactNode
}
export function IconBackground({children}: IconBackgroundProps) {
  return(
    <div className="svgSize bg-inherit flex items-center w-min rounded-md p-4 shadow-inner shadow-slate-600 cursor-pointer  hover:brightness-125 hover:scale-105 duration-500 ">
      {children}
    </div>
  )
}