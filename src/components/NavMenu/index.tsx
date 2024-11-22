import { NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "../ui/navigation-menu"
import { ItemList } from "./ItemList"
import { useState } from "react"
export function NavMenu () {
  const [menuOpen, setMenuOpen] = useState(false)
  function handleOpen() {
    setMenuOpen(!menuOpen)
  }
  return(
    <NavigationMenu className="z-50">
      <NavigationMenuList>
        <NavigationMenuItem className="rounded-md">
          <NavigationMenuTrigger className="border border-border rounded-md">Menu</NavigationMenuTrigger>
            
          <NavigationMenuContent 
          className="min-w-60 bg-background p-8 h-auto text-opacity-95"
          data-state={menuOpen}
          >
            <ul className=" m-auto flex flex-col gap-4"
                data-aos="fade-up"
                data-aos-duration="500"
            >
              <ItemList 
                title="Home"
                description="Bem vindo ao meu portifólio"
                link="#presentation"
                onClick={handleOpen}
              />
              <ItemList 
                title="Sobre"
                description="Uma breve descrição sobre mim"
                link="#about"
                onClick={handleOpen}
              />
              <ItemList 
                title="Projetos"
                description="Alguns dos meus projetos"
                link="#projects"
                onClick={handleOpen}
              />
              <ItemList 
                title="Contato"
                description="Fale comigo"
                link="#contact"
                onClick={handleOpen}
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    
  )
}