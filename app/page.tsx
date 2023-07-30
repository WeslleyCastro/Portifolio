"use client"

import { Header } from "@/components/Header"
import "./style.scss"
import { Introduction } from "@/components/Introduction"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { BsArrowUpShort } from "react-icons/Bs"
import { useState } from "react"
import Link from "next/link"
import { About } from "@/components/About"

export default function Home() {
  const [scroll, setScroll] = useState(false)

  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (latest) => {
    if(latest > 1000){
      setScroll(true)
    }else{
      setScroll(false)
    }
  })

  return (
    <main className="container">
      <section id="introduction-section">
        <Header/>
        <Introduction/>
      </section>

      <section id="about-section">
        <About/>
        <Projects/>
      </section>
      
      <section id="contact-section">
        <Contact/>
      </section>
      {scroll && <Link id="scrollUp" href="/"><BsArrowUpShort id="upButton"/></Link>}
    </main>
  )
}
