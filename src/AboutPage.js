import './AboutPage.css';
import './AboutPageDesktop.css';
import bridge from './Assets/Images/bridge.png';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AboutPage(props) {
    const opacity = useScroll({
        offset: ["end 100%", "start 0vh"],
    });




    return (
        <motion.div className="AboutPageComponent" key="AboutPageComponent" variants={AboutPage}>

            <div className="AboutUsContainer">
                <div className="AboutUsSpacer"></div>
                <h2>"Eyewear, Everywhere."</h2>
                <p>When Spyglass' founder, Karl Spirass, started selling handmade frames from carved wood, he encountered many obstacles in his path. But he perservered with a singular mantra:</p>
                <p>"Eyewear, Everywhere."</p>
                <p>If you'll excuse the play on words, Karl had a vision.</p>
                <p>And we intend to stick by it.</p>
                <p>Karl may have passed on, but we intend to do him proud. We've taken his saying to heart, and we strive to put ourselves into all we do. We like to think Karl is watching over us (through a pair of his signature frames, of course.)</p>
                <Link to="/Shop">Shop the looks</Link>

                
            </div>
            <motion.div className="MYL-container">
                <motion.div key="MYL" className="MYL" >
                    <motion.div key="MYL-text" className="MYL-text" > 
                        <p>Made</p>
                        <p>You</p>
                        <div id="look">
                            <p>Lo</p>
                            <img id="bridge" alt="edited text to look like a glasses bridge between the two o's in the word look" src={bridge} />
                            <p>ok.</p>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div key="MYL-filter" className="MYL-filter">  </motion.div>
                
            </motion.div>
            <div className="AboutUsSpacer"></div>
        </motion.div>
    )
}