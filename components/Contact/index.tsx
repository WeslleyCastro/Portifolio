"use client"

import { League_Spartan } from "next/font/google"
import "./styles.scss"
import { BsFillTelephoneFill } from "react-icons/bs"
import { AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import { LuCopyCheck } from "react-icons/lu"
import { useState } from "react"
import { Reveal } from "@/utils/Reveal"
import emailjs from "@emailjs/browser"
import { Message } from "../Message"


const league = League_Spartan({ 
  subsets: ['latin'],
  weight: ["400", "500"]
})


export const Contact = () => {
  const [copy, setCopy] = useState(false)
  const [visibleMessage, setVisibleMessage] = useState(false)

  function handleCopyNumber() {
    setCopy(true)
    const number = "11946282716"
    navigator.clipboard.writeText(number)
    setTimeout(() => setCopy(false), 3000)
  }

  function showMessage(){
    setVisibleMessage(true)
    setTimeout(() => setVisibleMessage(false), 3000)
  }

  async function handleSubmit(event: any){
    event.preventDefault()
    
    let userName = event.target.name.value
    let email = event.target.email.value
    let userMessage = event.target.formText.value
  
    const templateParams = {
      from_name: userName,
      email: email,
      message: userMessage
    }

    emailjs.send("service_njax59h","template_lhjajwm", templateParams, "PgPCeER7opW-GlLZs")
    .then(() => {
      showMessage()
    }, ((err) => console.error(err))
  )

    event.target.name.value = ""
    event.target.email.value = ""
    event.target.formText.value = ""
  }
    
  return(
    <div className="contact-container">
      {visibleMessage && <Message/>}
     <h2 className={league.className}>Contato</h2>
      <div className="contact-form">
        <Reveal width="fit-content">
          <div className="contact-img">
            <img src="/assets/bro.png" alt=""/>
          </div>
        </Reveal>
        
        <Reveal width="fit-content">
          <form onSubmit={handleSubmit}>
            <div className="contact-method">
              <span>
                <a href="https://github.com/WeslleyCastro" target="_blank"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/weslley-castro-da-silva/" target="_blank"><AiFillLinkedin/></a>
              </span>
              <span className="contact-number" onClick={handleCopyNumber}>
                (11) 946282716 {copy ? <LuCopyCheck/> : <BsFillTelephoneFill/>}
              </span>
            </div>
          
            <input type="text" name="name" required placeholder="Digite seu nome"/>
            <input type="email" name="email" required placeholder="Digite seu email"/>
            <textarea name="formText" required placeholder="Digite sua mensagem"/>
            <button type="submit">Enviar</button>
          </form>
        </Reveal>
      </div>
    </div>
  )
}