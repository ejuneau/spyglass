import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import logoWhite from '../Assets/Images/Logo (White, slogan).png';
import {AnimatePresence, motion} from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import {useSelector, useDispatch} from 'react-redux';
import { toggleMenu } from './menuSlice';
import { ReactComponent as ShoppingBag} from '../Assets/Images/shoppingBag.svg';





export default function Header(props) {
    const cart = useSelector((state) => state.cart.count);
    const showMenu = useSelector((state) => state.menu.showMenu);
    const dispatch = useDispatch();
    const [isHover, setIsHover] = useState(false);
    const [clickCount, setClickCount] = useState(0);


    const hamburger = {
        hidden: {
            opacity: 0,
            display: "none",
            transition: {
                display: {delay: 0.4}
            }
        },
        show: {
            opacity: 1,
            display: "inherit",
            transition: {
                delay: 0.2,
                display: {delay: 0.2}
            }
        },
        tap: {
            scale: 0.2,
            transition: {
                duration: 0.2,
                delay: 0.1
            }
        },
        hover: {
            scale: 0.9
        }
    }
    function onTap() {
        setClickCount(clickCount => clickCount + 1);
      }
    const spacerLogo = {
        show: {
            filter: "blur(0px) invert(100%)",
            opacity: 1,
            mixBlendMode: "normal",
            transition: {
                duration: 0.1,
                mixBlendMode: {delay: 0.1}
            }
        },
        hidden: {
            mixBlendMode: isHover?"normal":"exclusion",
            filter: `blur(${isHover?0:3}px) invert(0%)`,
            // opacity: isHover?1:0.75,
            scale: isHover?1.1:1,
            transition: {
                duration: 0.1,
                
            }
        },
    }
    const Logo = {
        show: {
            scale: 1,
            transition: {
                duration: 0.1
            }
        },
        hidden: {
            scale: isHover?1.1:1,
            transition: {
                duration: 0.1
            }
        },
    }
    return (
        <div className="HeaderComponent">
            <header>
                <motion.div layout className="menu-cart" key="menu-cart" variants={hamburger} initial="show"  onClick={()=>{dispatch(toggleMenu())}} animate={showMenu?"hidden":"show"}>
                    <div className="hamburger-container"  >
                        <FontAwesomeIcon className="hamburger" icon={solid('bars')} key="HeaderIcon"/>
                    </div>
                </motion.div>
                <Link to="/" className="logo" onClick={() => {dispatch(toggleMenu(false))}}>
                    <motion.img key="logo" src={logoWhite} variants={Logo} animate={showMenu?"show":"hidden"} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} alt="Spyglass Logo" id="logo" />
                </Link>
            </header>
            <div className="header-spacer">
                <Link to="/" className="logo" onClick={() => {dispatch(toggleMenu(false))}}>
                    <motion.img key="logo1" src={logoWhite} variants={spacerLogo} animate={showMenu?"show":"hidden"} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} alt="Spyglass Logo" id="logo" className="SpacerLogo" />
                </Link>
                <Link to="/Cart" className="cartCountContainer" onClick={()=>{dispatch(toggleMenu(false))}}>
                    <AnimatePresence mode="popLayout">
                        <motion.div key={`ShoppingBagContainer${cart}`} className="ShoppingBagContainer"
                            initial={{y:"0.5rem"}}
                            animate={{y: "0rem", rotate: ["0deg", "5deg", "0deg"], x: showMenu?1000:0, transition: {duration: 0.25, rotate: { duration: 0.2}, }}}
                            exit={{opacity: 0, transition: {duration: 0.01, delay: -0.02}}}
                            whileHover={{scale: 1.15}}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            whileTap={{scaleX: [1, -1, 1], transition: {duration: 0.3}}}
                            
                        >
                            <motion.p 
                                key={`KartKount ${cart}`} 
                                initial={{y:0}} 
                                animate={{y: ["0rem", "0.5rem", "0rem"], scaleX: [-1,1], skew: '1deg, -15deg', transition: {duration: 0.25}}} 
                                exit={{opacity:0, y:"-1rem"}}
                                id="cart-count" 
                                style={{"opacity": cart>1?1:0}}
                            >
                                {cart}
                            </motion.p>
                            <ShoppingBag  style={{"opacity": cart>0?1:0}} id="shoppingBag" alt="Shopping Bag icon" />
                        </motion.div>
                    </AnimatePresence>
                    </Link>
            </div>
        </div>
    )
}