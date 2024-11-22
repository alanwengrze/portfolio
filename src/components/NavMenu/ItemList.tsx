import { NavigationMenuLink } from "@radix-ui/react-navigation-menu"
interface ItemListProps {
  title: string
  description: string
  link: string
  onClick?: () => void
}
export function ItemList({title, description, link, onClick}: ItemListProps) {
  return (
      <NavigationMenuLink href={link} onClick={onClick}  className="w-full flex flex-col rounded-md p-4 hover:ring-2 ring-ring hover:scale-105 hover:duration-500 ">
        {title}
        <span className="">{description}</span>
      </NavigationMenuLink>
  )
}