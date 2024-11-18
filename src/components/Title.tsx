
interface TitleProps {
  title: string
}

export function Title({title}: TitleProps) {
  return (
    <h1 className="px-4 my-8 font-bold">{title}</h1>
  )
}