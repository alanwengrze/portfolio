import { ImgDesign } from "@/components/ImgDesign"
export type Project = {
  id: string
  title: string
  description: string
  image: React.ReactNode
  link: string
  repo: string
  techs: string[]
}

export const PROJECTS: Project[] = [
  {
    id: Math.random().toString(),
    title: 'Food explorer',
    description: 'Precisa de um sistema de pedidos de comida onde cada um usuário pode ter um perfil com seus pratos favoritos? Food explorer é uma aplicação web que simula um site de comida. Ela conta com dois tipos de usuários: O admin, que tem acesso a criação, edição e exclusão de pratos, e o usuário, que tem acesso visualização e um perfil com seus pratos favoritos.',
    image: <ImgDesign src="./food-explorer.webp" alt="Food Explorer"/>,
    link: 'https://alnfoodexplorer.netlify.app/',
    repo: 'https://github.com/alanwengrze/food-explorer-frontend',
    techs: ["React", "Javascript", "Styled Components", "Axios", "Express", "Node.js", "SQLite", "Knex.js", "JSON Web Tokens", "React Router", "Jest"]
  },
  {
    id: Math.random().toString(),
    title: 'Coffee Delivery',
    description: 'Precisa de um cardápio online para o seu negócio? Posso fazer para você! Coffee Delivery é uma aplicação de um cardápio online de cafés, onde o usuário pode adicionar seus cafés no carrinho e efetuar a compra.',
    image: <ImgDesign src="./coffee-delivery.webp" alt="Coffee Delivery"/>,
    link: 'https://ignite-coffe-delivery-two.vercel.app/',
    repo: 'https://github.com/alanwengrze/ignite_coffe-delivery',
    techs: ["React", "Typescript", "Styled Components", "React Router", "React Hook Form", "Zod", "Immer"]
  },
  {
    id: Math.random().toString(),
    title: 'Ignite Timer',
    description: 'Ignite Timer é um cronometro virtual. Baseado no sistema Pomodoro, ele te permite criar tarefas e gerenciar seus tempos de trabalho e descanso. Quer ter um sistema de cronometro virtual projetado para as suas necessidade? Vamos criar isso!',
    image: <ImgDesign src="./ignite-timer.webp" alt="Ignite Timer"/>,
    link: 'https://ignite-timer-gcsunw2e6-alanwengrzes-projects.vercel.app/',
    repo: 'https://github.com/alanwengrze/ignite-timer',
    techs: ["React", "Typescript", "Styled Components", "Zod", "React Hook Form", "Immer", "React Router"]
  },
  {
    id: Math.random().toString(),
    title: 'Fav Movies',
    description: 'Quer criar uma lista de filmes com suas avaliações e comentários? Ou qualquer outro tipo de listagem da sua necessidade? Podemos fazer algo como o Fav Movies! Um sistema de filmes onde o usuário pode criar uma lista de filmes com suas avaliações e comentários, buscar seus filmes e filtrar por nome ou gênero. Ele conta com um sistema de autenticação de usuários, onde é necessário realizar login e criar uma conta para acessar o site. ',
    image: <ImgDesign alt="Favorite Movies" src="./favorite-movies.webp"/>,
    link: 'https://yourfavoritemovies.netlify.app/',
    repo: 'https://github.com/alanwengrze/favoriteMovies-frontend',
    techs: ["React", "Javascript", "Styled Components", "Node.js", "Axios", "Express", "SQLite", "Knex.js", "JSON Web Tokens", "React Router" ]
  },
  {
    id: Math.random().toString(),
    title: 'DT Money',
    description: 'DT Money é uma aplicação web que simula um sistema de controle financeiro. Com ele, o usuário pode realizar transações com seus gastos, receitas e saldo atual. Além disso, pode também aplicar pesquisas de gastos e receitas por descrição.',
    image: <ImgDesign alt="DT Money" src="./dt-money.webp"/>,
    link: 'https://ignite-dt-money-nu.vercel.app/',
    repo: 'https://github.com/alanwengrze/ignite_dt-money',
    techs: ["React", "Typescript", "Styled Components", "Axios", "Zod", "React Hook Form", "Radix UI" ]
  }
]