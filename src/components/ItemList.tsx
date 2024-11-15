
interface ItemListProps {
  title: string
  description: string
  link: string
}
export function ItemList({title, description, link}: ItemListProps) {
  return (
      <li className="w-full flex flex-col p-4 rounded-md hover:brightness-125 hover:bg-zinc-900 hover:duration-500">
        <a href={link} className="flex flex-col target:scroll-m-5">{title}
        <span className="text-textColor">{description}</span>
        </a>      
      </li>
  )
}