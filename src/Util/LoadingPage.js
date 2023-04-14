import React from "react";
import { motion } from "framer-motion";
import MYL from '../Assets/Images/LoadingPage/MYL.gif';
import A from '../Assets/Images/LoadingPage/A.png';
import './LoadingPage.css';
export default function LoadingPage() {
    const images = [[MYL, "MYL"], [A, "A"]];
    const imageIndex = Math.floor(Math.random() * images.length);
    const variantString = images[imageIndex][1];

    const variants = [
        {
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
        },
        {
            initial: {
                scaleX: 1,
            },
            animate: {
                scaleX: [1, -1],
                transition: {
                    duration: 0.3,
                    repeat: Infinity,
                    repeatDelay: 0.5
                }

            }
        }
    ]

    return (
        <motion.div id="LoadingPageComponent" key="LoadingPageComponent" initial={false} animate={{opacity: 1}} exit={{y: '-150%', transition: {delay: 1}}}>
            <motion.img 
                key="LoadingImage" 
                id="LoadingImage" 
                variants={variants[imageIndex]}
                initial="initial"
                animate="animate"
                className={variantString}
                src={images[imageIndex][0]} />
        </motion.div>
    )
}