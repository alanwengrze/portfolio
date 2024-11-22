
interface ItemListProps {
  title: string
  description: string
  link: string
}
export function ItemList({title, description, link}: ItemListProps) {
  return (
      <li  className="hoverTest w-full flex flex-col p-4 rounded-md hover:scale-105 hover:duration-500 ">
        <a href={link} className="flex flex-col rounded-md p-4 hover:ring-2 ring-ring">{title}
        <span className="">{description}</span>
        </a>      
      </li>
  )
}