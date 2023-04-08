import './AboutPage.css';
import './AboutPageDesktop.css';
import bridge from '../../Assets/Images/bridge.png';
import MYL from '../../Assets/Images/MYL.png';
import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../Util/Button';
import { setMenuColor } from '../../Util/menuSlice';

export default function AboutPage(props) {
    const rotateBy = useSelector((state)=>state.rotate.antiRotateBy);
    const filterRef = useRef(null);
    const dispatch = useDispatch();
    const { scrollYProgress } = useScroll({
        container: filterRef,
    });
  


    // const [OA, setOA] = useState(((window.innerHeight/100)*15) / (window.innerWidth));
    // const [angle, setAngle] = useState(Math.atan(OA));
    // const [rotateBy, setRotateBy] = useState(`${1 - angle}rad`)
    const [height, setHeight] = useState("200vh");

    // //Calculate minimum angle to rotate by when 15vh becomes 9rem
    // //9rem in pixels
    // const minHeight = 9 * parseFloat(getComputedStyle(document.documentElement).fontSize); 
    // const [minAngle, setMinAngle] = useState(Math.atan(minHeight / window.innerWidth));


    useMotionValueEvent(scrollYProgress, "change", (latest) => {setHeight(`${Math.min(((1 - latest) * 1000), 100)}vh`);});
    //     useEffect(() => {
    //         setOA(((window.innerHeight/100)*15) / (window.innerWidth));
    //         setAngle(Math.atan(OA));
    //         setMinAngle(Math.atan(minHeight / window.innerWidth));
    //         setRotateBy(`${Math.max(angle, minAngle)}rad`);
    //         console.log("Rotation: "+rotateBy);
    //     }, [window.innerHeight, window.innerWidth]);
    useEffect(() => {
        dispatch(setMenuColor('var(--green)'));

    },[])
    return (
        <motion.div className="AboutPageComponent" key="AboutPageComponent" ref={filterRef} variants={AboutPage}>

            <div className="AboutUsContainer">
                <div className="AboutUsSpacer"></div>
                {/* <p>When Spyglass' founder, Karl Spirass, started selling handmade frames from carved wood, he encountered many obstacles in his path. But he perservered with a singular mantra:</p>
                <p>"Eyewear, Everywhere."</p>
                <p>If you'll excuse the play on words, Karl had a vision.</p>
                <p>And we intend to stick by it.</p>
                <p>Karl may have passed on, but we intend to do him proud. We've taken his saying to heart, and we strive to put ourselves into all we do. We like to think Karl is watching over us (through a pair of his signature frames, of course.)</p>
                <Link to="/Shop">Shop the looks</Link> */}
                <p>Karl Spirass founded Spyglass Eyewear on July 27, 1998. More accurately, Karl sold his first pair of frames on that day - he had been making his own frames for several years leading up to that point.</p>
                <p>The son of a carpenter and fashion designer, Karl found the wood from his mother's toolshed and sought his father's stylistic counsel. According to his father, little Karl had been making accessories out of modelling clay as soon as he got his  hands on it. A tiny handbag here, a brightly coloured (yet proportionally accurate) shoe there, and yes - even glasses.</p>
                <p>Karl studied pharmacology at university where he discovered a love for the human body, but he always knew his passion lied outside of life sciences. After years of dissatisfaction within this field, he decided to make a career switch - This proved difficult, as he did not quite know what he was switching to.</p>
                <p>It was in the middle of this creative rut that Karl's vision came to life. He was working on a final lab project for one of his pharmacology professors when an errant chemical reaction escaped the fume hood and caused Karl's eyes to scar irreversably. The damage was not too severe and could be corrected by eyeglasses, but he took this as a sign that he needed to leave the field.</p>
                <p>Over the many years since this incident, Karl became more and more frustrated with the state of the eyeglasses industry. As the parent-diagnosed perfectionist, he would not be satisfied with a pair of glasses frames unless they were tailored just for him.</p>
                <p>After breaking his most recent pair of frames in 1993, Karl finally decided that he would try to make his own pair of frames. Knowing that the placement and milling of the lenses could correct any minor imperfections in the construction of the frame, he set off to work, armed with his mother's briar and carving tools as well as his father's fashion magazines.</p>
                <p>The first few iterations were unsurprisingly poor. Without much formal training it was hard to strike the balance of the comfort he required due to his affliction, and the style he refused to compromise for. After several years (and, he later admitted, more wood than he'd want his mother to find out about), the first edition of his wooden frames were completed. All that was left was to have an optometrist fill them with his prescription.</p>
                <p>At the optometrist, the technician was so enthralled by Karl's handmade frames that they accidentally snapped the brittle wood while taking a closer look. Although Karl had other models in his garage and was not too fussed by the mishap, the technician was so apologetic they insisted they pay Karl for the damages.</p>
                <p>And so, the first sale of Karl's glasses was made, albeit indirectly. The commotion caught the attention of another patient at the optometrist's office, the hyperopic future co-founder of the company: Andrea Geller.</p>
                <p>Two years later Spyglass Eyewear was created at the turn of the millenium. Karl never settled for the easy path, and found his dream job perfectly suited for the unique intersection of his skills. When asked for his input on a slogan for the company Karl, ever the perfectionist, was adamant on paying homage to the lab technician who repeated the same two words ad nauseam at the lab which he ignored on that fateful day:</p>
                <h2>"Eyewear, Everywhere"</h2>
                <p>Karl has since passed on, but this website is dedicated to him and all those like him who refuse to compromise their beliefs for the easy way. The frames for sale here all pass Karl's highest standards, and we hope you wear them with pride, knowing you are carrying on the legacy of a great man taken long before he was ready to go.</p>
                <Link to="/Shop" style={{display: "inline-block"}}><Button text="Shop the looks" /></Link>

                {/* Eyewear everywhere comes from lab tech who wanted him to wear safety goggles*/}


                
            </div>
            <motion.div className="MYL-container">
            
                <motion.div key="MYL" className="MYL" >
                    <motion.img key="MYL-text" className="MYL-text" initial={{rotate: rotateBy}} animate={{rotate: rotateBy}} src={MYL}/>
                </motion.div>
                <motion.div key="MYL-filter" className="MYL-filter" style={{height: height}} >  </motion.div>
                
            </motion.div>
            <div className="AboutUsSpacer"></div>
            <div className="AboutUsSpacer"></div>
        </motion.div>
    )
}