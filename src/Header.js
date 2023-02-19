import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import logo from './Assets/Images/Logo (2 color, slogan).png';
import {motion} from 'framer-motion';
import React from 'react';


export default function Header(props) {
    return (
    <header>
            <motion.div className="menu-cart" key="menu-cart" animate={{opacity: props.showMenu?0:1}}>
                {/* <FontAwesomeIcon className="hamburger" icon={solid('bars')} onClick={props.handleMenuToggle}/> */}
                <div className="hamburger-container" onClick={props.handleMenuToggle}>
                    <p className="hamburger" style={{"fontFamily": "Portia"}} >II</p>
                </div>
                <p id="cart-count" style={{"fontFamily": "Portia", "color": "#FC5130", "display":props.cart>0?"initial":"none"}}>{props.cart}</p>
            </motion.div>
            <div className="logo">
                <img src={logo} alt="Spyglass Logo" />
            </div>

    </header>
    )
}