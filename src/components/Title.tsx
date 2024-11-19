
interface TitleProps {
  title: string
}

export function Title({title}: TitleProps) {
  return (
    <h1 className="w-fit px-4 my-8 font-bold bg-primary-foreground rounded-r-md text-background">{title}</h1>
  )
}