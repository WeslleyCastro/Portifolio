import { BiLogoJavascript, BiLogoMongodb, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiLogoCss3} from "react-icons/Bi"
import { SiNextdotjs, SiStyledcomponents } from "react-icons/Si"
import { AiFillGithub, AiOutlineLink } from "react-icons/Ai"
import "./styles.scss"
import { Reveal } from "@/utils/Reveal"

export interface ProjectProps {
  src: string,
  title: string,
  language: Array<string>
  about: Array<string>
  link: string
  repository: string
}


export const Project = ({ src, title, language, about, link, repository}: ProjectProps) => {

  function logoLanguage(lg: string) {
    switch(lg){
      case "javaScript": return <BiLogoJavascript/>
      case "typeScript": return <BiLogoTypescript/>
      case "nextjs": return <SiNextdotjs/>
      case "mongodb": return <BiLogoMongodb/>
      case "react": return <BiLogoReact/>
      case "tailwind": return <BiLogoTailwindCss/>
      case "css": return <BiLogoCss3/>
      case "styledComponent": return <SiStyledcomponents/>
    }
  }

  return (
    <Reveal width="100%">
      <div className="project">
        <div className="project-image">
          <img src={src} alt="imagem do projeto"/>
            <div className="image-links">
              <a href={repository} target="_blank"><AiFillGithub/></a> 
              <a href={link} target="_blank"><AiOutlineLink/></a>
            </div>
        </div>
        <div className="project-text">
          <div className="title">
            <h3>{title}</h3>
            <a href={link} target="_blank">{link}</a>
          </div>
          
          {about.map((text) => <p key={text}>{text}</p>)}
          <div className="project-skills">
            {language.map((lg) => logoLanguage(lg))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}