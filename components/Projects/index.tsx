import "./styles.scss"
import { League_Spartan } from "next/font/google"
import { Project } from "./Project"

const GithubProjects = [
  {
    src: "/assets/images/promptopia.png",
    title: "Promptopia",
    language: ["javaScript", "typescript", "mongodb", "react", "nextjs", "tailwind"],
    about: ["O projeto consiste em um site onde o usuário poderá compartilhar ou encontrar prompts para utilizar em diversas IA. O principal motivo para criação, foi para aprender a utilizar o Next.js 13. Encontrei esse projeto no youtube JavaScript Mastery, que ajudou na criação do projeto e deixou alguns desafios para conclusão.", "Por se tratar de uma aplicação que é necessário a autenticação do usuário, utilizamos a open source next-auth, o login é realizado com o provider da google e com o next-auth conseguimos verificar se há um usuário logado, assim sendo possível criar um prompt e neste prompt quando clicar nas informações de usuario, ser direcionado para seu perfil que poderá editar e excluir seus prompts já criado, ou ser direcionado para o perfil de outro usuário."],
    link: "https://promptopia-phi-two.vercel.app",
    repository: "https://github.com/WeslleyCastro/Promptopia"
  },
  {
    src:"/assets/images/movieLib.png",
    title: "MovieLib",
    language: ["javaScript", "react", "css"],
    about: ["O objetivo do projeto é apresentar os filmes melhores avaliados pelo IMDB, também é possível pesquisar filmes pelo nome e ver suas informações de custo, avaliação, descrição, duração e receita.", "Com o React.js, o site foi criado seguindo o conceito de SPA(single page application), então mesmo realizando a pesquisa por filmes ou acessando os detalhes do filme, nao há o carregamento da pagina, assim entregando uma melhor experiência para o usuario.", "Com a componentização do React, assim como o card e na pagina de descrição, foi passado as informações utilizando props drilling. Utilizei tambem a API IMDB para acessar os dados dos filmes com API REST."],
    link: "https://movielib-project.netlify.app",
    repository: "https://github.com/WeslleyCastro/movielib"
  },
  {
    src:"/assets/images/pomodoro.png",
    title: "Pomodoro",
    language: ["javaScript", "typeScript", "react", "styledComponent"],
    about: ["Projeto de Pomodoro que realiza a contagem de acordo com o tempo desejado. O usuario consegue escrever o nome do projeto e a duração.", "Contem uma pagina de historico com os projetos que foram concluidos, interrompidos ou em andamento.", "utilizei Context para compartilhar os ciclos de usuario que estão em um array com outros components. Utilizando o useReducer, foi possivel validar se o usuario estaria criando um novo cyclo, interrompendo, ou com a finalização to timer apenas marcando o ciclo como finalizado. Por conta dos ciclos estarem em um array, com o immer(produce) o estado que armazena os ciclos foi tratado como se o  fosse mutavel assim podendo utilizar manipulação de array como por exemplo o push."],   
    link: "https://pomodo-project.vercel.app",
    repository: "https://github.com/WeslleyCastro/pomodoro"
  },
  {
    src:"/assets/images/money.png",
    title: "Money",
    language: ["javaScript", "typeScript", "react", "styledComponent"],
    about: ["O site Money registra transações de forma manualmente, é possivel adicionar o valor que foi depositado ou recebido com o motivo/tipo da transação, e assim será somado o valor total das transações na pagina inicial, também registrando o valor de saída e entrada.", "O Deploy foi realizado na Vercel juntamente com o json-server, portanto pode não ocorrer a autalização em tempo real dos dados inseridos.", "Utilizei context para compartilhar as transações que foram buscadas utilizando API Rest, também com o zod e useForm para criar schemas e armazendo os dados para realizar o post ao json-server."],
    link: "https://money-lake.vercel.app",
    repository: "https://github.com/WeslleyCastro/money"
  }
]

const league = League_Spartan({ 
  subsets: ['latin'],
  weight: ["400", "500"]
})


export const Projects = () => {
  return(
    <div className="project-container">
      <div className="projects-content">
      <h2 className={league.className}>Projetos</h2>
        
        <div className="projects">
          {GithubProjects.map((repo) => (
            <Project 
              key={repo.src} 
              src={repo.src} 
              title={repo.title} 
              language={repo.language}
              about={repo.about}
              link={repo.link}
              repository={repo.repository}  
            />
          ))}
        </div>

      </div>
    </div>
  )
}