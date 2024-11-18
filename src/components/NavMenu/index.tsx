import { NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "../ui/navigation-menu"
import { ItemList } from "../ItemList"

export function NavMenu () {
  return(
    <NavigationMenu className="z-50 fixed m-auto w-full text-white">
      <NavigationMenuList className="">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="border cardBorder rounded-md">Menu</NavigationMenuTrigger>
            
          <NavigationMenuContent className="min-w-64 bg-background p-8 h-auto text-opacity-95 text-white"
          >
            <ul className=" m-auto flex flex-col gap-4"
            data-aos="fade-up"
            
            >
              <ItemList 
                title="Home"
                description="Bem vindo ao meu portifólio"
                link="#presentation"
              />
              <ItemList 
                title="Sobre"
                description="Uma breve descrição sobre mim"
                link="#about"
              />
                <ItemList 
                title="Projetos"
                description="Alguns dos meus projetos"
                link="#projects"
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    
  )
}