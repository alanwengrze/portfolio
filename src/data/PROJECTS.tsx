

export type Project = {
  id: string
  title: string
  description: string
  image: string
  link: string
  techs: string[]
}

export const PROJECTS: Project[] = [
  {
    id: Math.random().toString(),
    title: 'Projeto 1',
    description: 'Descricção do projeto 1',
    image: 'https://via.placeholder.com/150',
    link: 'https://github.com/AlanWengrze',
    techs: ["Javascript", "Typescript", "React", "Tailwind CSS", "Node.js"]
  }
]