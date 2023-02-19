import './Menu.css';
import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
export default function Menu(props) {
    return (
        <AnimatePresence>
        <div className="menu">
            <motion.div key="menuTopAccent" className="menuTopAccent" layout animate={{height: props.showMenu?"15em":"0", y: props.showMenu?"0":"-10em"}} transition={{delay:props.showMenu?0.5:0}}/>
            <div className="menuMain">
                <div className="closeMenuContainer" onClick={props.handleMenuToggle}><p>X</p></div>
            </div>
        </div>
        </AnimatePresence>
    )
}
