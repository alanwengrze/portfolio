interface IconBackgroundProps {
  children: React.ReactNode
}
export function IconBackground({children}: IconBackgroundProps) {
  return(
    <div 
      aria-label="Ícone"
      className={`bgStyleIcon dark:iconShadowDark svgSize flex items-center w-min rounded-md p-4 animate-in fade-in-0 duration-1000`}
    >
      {children}
    </div>
  )
}