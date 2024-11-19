
interface ItemListProps {
  title: string
  description: string
  link: string
}
export function ItemList({title, description, link}: ItemListProps) {
  return (
      <li  className="hoverTest w-full flex flex-col p-4 rounded-md hover:ring-2 ring-ring hover:scale-105 hover:duration-500">
        <a href={link} className="flex flex-col target:scroll-m-5">{title}
        <span className="">{description}</span>
        </a>      
      </li>
  )
}