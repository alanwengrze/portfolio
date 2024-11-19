
interface IconBackgroundProps {
  children: React.ReactNode
}
export function IconBackground({children}: IconBackgroundProps) {
  return(
    <div aria-label="Icon" className="bgStyleIcon dark:iconShadowDark svgSize bg-inherit flex items-center w-min rounded-md p-4 ">
      {children}
    </div>
  )
}