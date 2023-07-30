import { Reveal } from "@/utils/Reveal"
import "./style.scss"
import { FaGithub, FaLinkedin} from "react-icons/Fa"
import Link from "next/link"

export const Header = () =>{
  return(
    <Reveal width="100%">
      <header>
        <nav>
          <Link href="/"><span>Início</span></Link>
          <Link href="#about-section"><span>Projetos</span></Link>
          <Link href="#contact-section"><span>Contato</span></Link>
          <a href="https://github.com/WeslleyCastro" target="_blank"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/weslley-castro-da-silva/" target="_blank"><FaLinkedin/></a>
        </nav>
      </header>
    </Reveal>
  )
}