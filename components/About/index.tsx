import "./style.scss"


export const About = () => {
  return(
    <div className="about-container">
      <div className="about-text">
        <h2>Sobre mim</h2>
        <p>Olá, meu nome é Weslley. Desde criança sempre fui apaixonado por tecnologia, com meus 9 anos de idade inicei meu primeiro curso técnico de informática e, posteriormente, iniciei outro curso técnico em carreiras digitais, onde abordou sobre programação, UX/UI, criação de projetos, e com este curso foi crescendo o meu interesse por desenvolvimento Web.</p>
        
        <p>Atualmente estou cursando Análise e Desenvolvimento de Sistemas na faculdade Descomplica, e estudando por conta própria desenvolvimento web, com foco em React.js.</p>
         
        <p>Meu objetivo é conseguir um estágio ou atuar como Júnior em uma empresa onde eu posso me desenvolver como profissional e continuar aprendendo sobre Desenvolvimento Web.</p>
      </div>

      <div className="about-courses">
        <div className="about-courses-box">
          <h3>Faculdade</h3>
          <p>ADS - Descomplica</p>
          <span>2023</span>
        </div>
        
        <div className="about-courses-box">
          <h3>Curso Técnico</h3>
          <p>Carreiras digitas - Start Pro</p>
          <span>2023</span>
        </div>


        <div className="about-courses-box">
          <h3>Curso Técnico</h3>
          <p>Infomatica - CEF</p>
          <span>2019</span>
        </div>

      </div>
    </div>
  )
}