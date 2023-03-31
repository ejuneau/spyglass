import React from "react";
import { motion } from "framer-motion";
import './Button.css';

export default function Button(props) {
    const button = {
        initial: {
          scale: 1,
          rotate: Math.ceil(Math.random() * 5) * (Math.round(Math.random()) ? 1 : -1),
          skew: Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1),

        },
        hover: {
          scale: (Math.random() * (1.5-1.1) + 1.1),
          rotate: Math.ceil(Math.random() * 15) * (Math.round(Math.random()) ? 1 : -1),
          skew: Math.ceil(Math.random() * 15) * (Math.round(Math.random()) ? 1 : -1),
          transition: {
            duration: 0.2
          }
        }
      }

    return(
        <motion.div key={`Button ${props}`}  variants={button} initial="initial" whileHover="hover" className="ButtonComponent" onClick={() => props.onClick && props.onClick()}  ><p>{props.text}</p></motion.div>
    )
}