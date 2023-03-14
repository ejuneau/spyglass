import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import logoWhite from '../Assets/Images/Logo (White, slogan).png';
import logoBlack from '../Assets/Images/Logo (Black, slogan).png';
import {motion} from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import './Header.css';
import {useSelector, useDispatch} from 'react-redux';
import { toggleMenu } from './menuSlice';



export default function Header(props) {
    const cart = useSelector((state) => state.cart.contents);
    const showMenu = useSelector((state) => state.menu.showMenu);
    const dispatch = useDispatch();

    const [isHover, setIsHover] = useState(false);
    const handleHoverChange = () => {setIsHover(!isHover)};

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
            opacity: isHover?1:0.75,
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
                <motion.div className="menu-cart" key="menu-cart" variants={hamburger} initial="show"  onClick={()=>{dispatch(toggleMenu())}} animate={showMenu?"hidden":"show"}>
                    <div className="hamburger-container"  >
                        <FontAwesomeIcon className="hamburger" icon={solid('bars')} key="HeaderIcon"/>
                    </div>
                    <p id="cart-count" style={{"fontFamily": "Portia", "color": "#FC5130", "display":cart.length>0?"initial":"none"}}>{cart.length}</p>
                </motion.div>
                <Link to="/" className="logo" onClick={() => {this.forceUpdate()}}>
                    <motion.img key="logo" src={logoWhite} variants={Logo} animate={showMenu?"show":"hidden"} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} alt="Spyglass Logo" id="logo" />
                </Link>
            </header>
            <div className="header-spacer">
                <Link to="/" className="logo" onClick={() => {this.forceUpdate()}}>
                    <motion.img key="logo1" src={logoWhite} variants={spacerLogo} animate={showMenu?"show":"hidden"} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} alt="Spyglass Logo" id="logo" className="SpacerLogo" />
                </Link>
            </div>
        </div>
    )
}