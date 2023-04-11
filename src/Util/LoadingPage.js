import React from "react";
import { motion } from "framer-motion";
import MYL from '../Assets/Images/MYL.png';
import './LoadingPage.css';
export default function LoadingPage() {
    const images = [MYL];
    const imageIndex = Math.floor(Math.random() * images.length);

    const variants = {
        MYL: {
            initial: {
                y: 0,
            },
            animate: {
                y: ["0rem", "0.5rem", "0rem"],
                transition: {
                    duration: 0.3,
                    repeat: Infinity,
                    repeatDelay: 0.5
                }

            }
        }
    }

    return (
        <div id="LoadingPageComponent">
            <motion.img 
                key="LoadingImage" 
                id="LoadingImage" 
                variants={variants.MYL}
                initial="initial"
                animate="animate"
                src={images[imageIndex]} />
        </div>
    )
}