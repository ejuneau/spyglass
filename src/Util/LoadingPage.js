import React , {useState} from "react";
import { motion } from "framer-motion";
import MYL from '../Assets/Images/LoadingPage/MYL.gif';
import A from '../Assets/Images/LoadingPage/A.png';
import EyewearEverywhere from '../Assets/Images/LoadingPage/EyewearEverywhere.png';
import './LoadingPage.css';
export default function LoadingPage() {
    const images = [[MYL, "MYL"], [A, "A"], [EyewearEverywhere, "EyewearEverywhere"]];
    const [imageIndex] = useState(Math.floor(Math.random() * images.length));
    const variantString = images[imageIndex][1];

    const variants = [
        { //MYL variants
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
        { //A variants
            initial: {
                scaleX: 1,
            },
            animate: {
                scaleX: [-1, 1],
                transition: {
                    duration: 0.3,
                    repeat: Infinity,
                    repeatDelay: 0.5
                }

            }
        },
        { //EyewearEverywhere variants
            initial: {
                x: 0,
            },
            animate: {
                x: '-100vw',
                transition: {
                    duration: 2,
                    repeat: Infinity,
                }
            }
        }
    ]

    return (
        <motion.div id="LoadingPageComponent" key="LoadingPageComponent" initial={false} animate={{opacity: 1}} exit={{y: '-150%', transition: {delay: 1}}}>
            <motion.img 
                key="LoadingImage" 
                id={variantString}
                variants={variants[imageIndex]}
                initial="initial"
                animate="animate"
                className="LoadingImage"
                src={images[imageIndex][0]} />
        </motion.div>
    )
}