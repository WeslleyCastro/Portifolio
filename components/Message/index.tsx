import "./style.scss"
import { motion } from "framer-motion"

export const Message = () => {

  return(
      <motion.div 
        className="message-box"
        animate={{x: -120}}
        
      >
        <p>E-mail enviado!</p>
      </motion.div>
  )
}