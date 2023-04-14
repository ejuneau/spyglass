import React, { useState } from "react";
import { send } from 'emailjs-com';
import './ContactPage.css';
import './ContactPageDesktop.css';
import gramophone from '../../Assets/Images/ContactPage/gramophone.png';
import WLTYFY from '../../Assets/Images/ContactPage/WLTHFY.webp';
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ContactPage(props) {
  const animations = {
    rotate: {
      clipPath: [
        "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
        "polygon(0% 0%, 100% 14%, 100% 100%, 0% 81%)",
        "polygon(26% 0%, 100% 30%, 72% 100%, 0% 63%)",
        "polygon(72% 0%, 100% 63%, 26% 100%, 0% 34%)",
        "polygon(94% 0%, 100% 84%, 3% 100%, 0% 12%)", 
        "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)"], 
    transition: {repeat: Infinity, repeatType: "loop"}
  },
  rotateSubmit: {
    backgroundColor: "var(--white)",
    color: "var(--red)",
    clipPath: [
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
      "polygon(0% 0%, 100% 14%, 100% 100%, 0% 81%)",
      "polygon(26% 0%, 100% 30%, 72% 100%, 0% 63%)",
      "polygon(72% 0%, 100% 63%, 26% 100%, 0% 34%)",
      "polygon(94% 0%, 100% 84%, 3% 100%, 0% 12%)", 
      "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)"], 
  transition: {repeat: Infinity, repeatType: "loop"}
},
}

useEffect(() => {
  const emoji = ["🤓","👀","🕶️","😎","🥸","👓","🥽","🔍","🔎","🔭"];
  document.title = `Spyglass Eyewear ${emoji[Math.floor(Math.random()*emoji.length)]}`;
}, [])
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_5ujuq5p',
          'template_2huvbwp',
          toSend,
          '3p82pPQGGw838DKuu'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            window.alert("Your message has been sent. Thank you for your feedback!")
            window.location="/"
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return (
        <div className="ContactPageComponent">
            <form onSubmit={onSubmit}>
                <input
                    id="your_name"
                    type='text'
                    name='from_name'
                    placeholder='Your name'
                    value={toSend.from_name}
                    required
                    onChange={handleChange}
                />
                <input
                    id="your_email"
                    type='email'
                    name='reply_to'
                    placeholder='Your email'
                    pattern="^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$"
                    required
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                <textarea
                    id="message"
                    type='text'
                    name='message'
                    required
                    placeholder='Tell me your secrets...'
                    value={toSend.message}
                    onChange={handleChange}
                />

                <motion.button key="submit" id="submit" variants={animations} whileHover="rotate" onTap="rotateSubmit" type='submit'>SEND</motion.button>

                
            </form>
            <motion.div key="contactPics" layout className="contactPics">
              <motion.img key="WLTHFY" 
              initial={{
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%", 

                rotate: "15deg", 
                x: "20vw"}} 

                animate={{ 
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
                  x: 0, 
                  y: ["-5vh", "-10vh", "-10vh", "0vh"], 
                  rotate: 0}}

                transition={{
                  clipPath: {delay: 0.9, duration: 0.3}, 
                  x: {delay: 1, duration: 0.3}, 
                  y: {
                    delay: 0.85,
                    duration: 1,
                    times: [0, 0.3, 0.8, 1]
                }, 
                  rotate: {delay: 1.65, duration: 0.2}
                  }}
                  
                  src={WLTYFY} id="WLTHFY" alt="we'd love to hear from you." />
              <motion.img key="gramophone" 
                animate={{rotate: [0, 20, -10, 0]}} 
                transition={{duration: 1, times: [0, 0.8, 0.9, 1]}} src={gramophone}  id="gramophone" alt="vector of a grampohone"/>
            </motion.div>
            
            
        </div>
    )
}