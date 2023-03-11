import './AboutPage.css';
import './AboutPageDesktop.css';
import bridge from '../../Assets/Images/bridge.png';
import MYL from '../../Assets/Images/MYL.png';
import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AboutPage(props) {
    const filterRef = useRef(null)
    const { scrollYProgress } = useScroll({
        container: filterRef,
    });
  
    const [OA, setOA] = useState(((window.innerHeight/100)*15) / (window.innerWidth));
    const [angle, setAngle] = useState(Math.atan(OA));
    const [rotateBy, setRotateBy] = useState(`${1 - angle}rad`)
    const [height, setHeight] = useState("200vh");

    //Calculate minimum angle to rotate by when 15vh becomes 9rem
    //9rem in pixels
    const minHeight = 9 * parseFloat(getComputedStyle(document.documentElement).fontSize); 
    const [minAngle, setMinAngle] = useState(Math.atan(minHeight / window.innerWidth));


        useMotionValueEvent(scrollYProgress, "change", (latest) => {setHeight(`${Math.min(((1 - latest) * 60), 50)}vh`);});
        useEffect(() => {
            setOA(((window.innerHeight/100)*15) / (window.innerWidth));
            setAngle(Math.atan(OA));
            setMinAngle(Math.atan(minHeight / window.innerWidth));
            setRotateBy(`${Math.max(angle, minAngle)}rad`);
            console.log("MYL Rotation: "+rotateBy);
        }, [window.innerHeight, window.innerWidth]);

    return (
        <motion.div className="AboutPageComponent" key="AboutPageComponent" ref={filterRef} variants={AboutPage}>

            <div className="AboutUsContainer">
                <div className="AboutUsSpacer"></div>
                <h2>"Eyewear, Everywhere."</h2>
                <p>When Spyglass' founder, Karl Spirass, started selling handmade frames from carved wood, he encountered many obstacles in his path. But he perservered with a singular mantra:</p>
                <p>"Eyewear, Everywhere."</p>
                <p>If you'll excuse the play on words, Karl had a vision.</p>
                <p>And we intend to stick by it.</p>
                <p>Karl may have passed on, but we intend to do him proud. We've taken his saying to heart, and we strive to put ourselves into all we do. We like to think Karl is watching over us (through a pair of his signature frames, of course.)</p>
                <Link to="/spyglass/Shop">Shop the looks</Link>

                
            </div>
            <motion.div className="MYL-container">
            
                <motion.div key="MYL" className="MYL" >
                    {/* <motion.div key="MYL-text" className="MYL-text" initial={{rotate: rotateBy}} animate={{rotate: rotateBy}} > 
                        <p>Made</p>
                        <p>You</p>
                        <div id="look">
                            <p>Lo</p>
                            <img id="bridge" alt="edited text to look like a glasses bridge between the two o's in the word look" src={bridge} />
                            <p>ok.</p>
                        </div>
                    </motion.div> */}
                    <motion.img key="MYL-text" className="MYL-text" initial={{rotate: rotateBy}} animate={{rotate: rotateBy}} src={MYL}/>
                </motion.div>
                <motion.div key="MYL-filter" className="MYL-filter" style={{height: height}} >  </motion.div>
                
            </motion.div>
            <div className="AboutUsSpacer"></div>
            <div className="AboutUsSpacer"></div>
        </motion.div>
    )
}