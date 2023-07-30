"use client"

import { League_Spartan } from "next/font/google"
import "./style.scss"
import { BiLogoJavascript, BiLogoReact, BiLogoGit, BiLogoTypescript, BiLogoSass} from "react-icons/Bi"
import { SiStyledcomponents } from "react-icons/Si"
import { Reveal } from "@/utils/Reveal"
import Typewriter from "typewriter-effect"

const league = League_Spartan({ 
  subsets: ['latin'],
  weight: ["400", "500"]
})

export const Introduction = () => {
  return(
    <div className="introduction-container">
      <Reveal width="100%">
        <div className={`${league.className} apresentation`}>
            <h1>
              Olá, eu sou Weslley Castro <br/>
              <span>
                  {<Typewriter options={{
                    strings: ["Web Developer", "React Developer"],
                    autoStart: true,
                    loop: true
                  }}/>}
              </span>
            </h1>
        </div>
      </Reveal>
        <Reveal width="fit-content">
          <img className="img-laptop"
            src="/assets/laptop-dark.png"
            alt="laptop"
          />
        </Reveal>
            <div className="skills">
              <BiLogoJavascript title="JavaScript"/>
              <BiLogoReact title="React"/>
              <BiLogoTypescript title="TypeScript"/>
              <BiLogoSass title="Sass"/>
              <BiLogoGit title="Git"/>
              <SiStyledcomponents title="StyledComponent"/>
            </div>
    </div>
  )
}