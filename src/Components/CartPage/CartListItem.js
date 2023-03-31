import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Products from "../../Util/Products";
import { useSearchParams } from "react-router-dom";
import { modifyQuantity, removeFromCart } from "../../Util/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function CartListItem(props) {
    const searchParams = useSearchParams();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.contents);
    const [quantity, setQuantity] = useState(1);
    const rotateBy = useSelector((state)=> state.rotate.rotateBy);
    const [decCounter, setDecCounter] = useState(0);
    const [incCounter, setIncCounter] = useState(0);
    const [decDirection, setDecDirection] = useState({initial: "1rem", exit: "-1rem"});

    function increaseQuantity() {
        setQuantity(prevNumber => prevNumber + 1);
        setDecCounter(0);
        setIncCounter(prevNumber => prevNumber + 1);
    }
    function decreaseQuantity() { 
        props.item.quantity>1?setQuantity(props.item.quantity - 1):setQuantity(1);  
        setIncCounter(0);
        setDecCounter(prevNumber => prevNumber + 1);
    }
    useEffect(()=> {
        setDecDirection(incCounter > decCounter ? {initial: "1rem", exit: "-1rem"} : {initial: "-1rem", exit: "1rem"});
    }, [incCounter, decCounter]);
    console.log(props.item);
    return(
    <motion.div 
    key={`CartListItem ${props.item.id}-${props.item.variant}`} 
    
    className="cartListItem"
    
    layout 
    initial={{opacity: 0}}
    animate={{opacity: 1}} 
    exit={{opacity: 0}} 
    >
                                <Link id="titlePic" to={`/Shop/Product/${Products.find(items => items.id === props.item.id).name}${Products.find(items => items.id === props.item.id).variants.length > 1?`?variant=${props.item.variant}`:''}`} >
                                    <h1>The {Products.find(items => items.id === props.item.id).name}</h1>
                                    <img id="cartImg" src={Products.find(items => items.id === props.item.id).variants[props.item.variant].photos.front} alt={`The ${Products.find(items => items.id === props.item.id).name}, seen from the front`} />
                                </Link>
                                <div id="cartPageOptions">
                                    <div className="cartPageOptionsContainer">
                                    {/* <button id="quantButton" onClick={()=>{dispatch(modifyQuantity({id: item.id, variant: item.variant, newQuantity: item.quantity - 1}))}}>-</button>
                                    <button id="quant">{item.quantity}</button>
                                    <button id="quantButton" onClick={()=>{dispatch(modifyQuantity({id: item.id, variant: item.variant, newQuantity: item.quantity + 1}))}}>+</button> */}

                                        <AnimatePresence mode="sync">

                                            <div className="CartButtonsContainer" id="isInCart">
                                                <button id="quantButton" onClick={()=>{decreaseQuantity(); dispatch(modifyQuantity({id: props.item.id, variant: props.item.variant, newQuantity: props.item.quantity - 1}))}}>
                                                    <AnimatePresence mode="wait">
                                                        <motion.div 
                                                        layout
                                                        key={`decQuant${props.item.quantity}IC`} 
                                                        initial={{
                                                            x: decDirection.initial, 
                                                            opacity: 0, 
                                                            transition: {duration: 0.1}
                                                        }} 
                                                        animate={{
                                                            x: 0, 
                                                            opacity: 1, 
                                                            transition: {duration: 0.1}
                                                        }} 
                                                        exit={{
                                                            x: decDirection.exit, 
                                                            opacity: 0, 
                                                            transition:{duration: 0.1}
                                                            }}>                                    {
                                                                cart.length > 0 && cart.filter(item => item.id === props.item.id).find(item => item.variant === props.item.variant).quantity === 1 ?
                                                                <FontAwesomeIcon id="cartTrash" icon={solid("trash-can")} /> :
                                                                <p>-</p>
                                                            
                                                            }</motion.div>
                                                    </AnimatePresence>
                                                </button>
                                                <AnimatePresence mode="popLayout">
                                                    <motion.div 
                                                    key="inCart" 
                                                    initial={{
                                                        opacity: 0, 
                                                        y: "5vh"}} 
                                                    animate={{
                                                        opacity: 1, 
                                                        y: 0}} 
                                                    exit={{
                                                        opacity: 0, 
                                                        y: "5vh"}} 
                                                    style={{position: "relative", display: 'flex', color:"var(--white)", fontFamily:"Noir", margin: 0, display: "flex", alignItems: "center", fontSize:"1.2rem"}}>
                                                        <AnimatePresence>
                                                            <motion.p 
                                                            key={`${props.item.id}-${props.item.variant}-${props.item.quantity}`}
                                                            initial={{
                                                                opacity: 0, 
                                                                y: incCounter > decCounter ? "5vh" : "-5vh",
                                                                scaleY: 0
                                                            }} 
                                                                animate={{
                                                                    opacity: 1, 
                                                                    y: 0,
                                                                    scaleY: 1
                                                                }} 
                                                                exit={{
                                                                    opacity: 0, 
                                                                    y: incCounter > decCounter ? "-5vh"  :"5vh",
                                                                    scaleY: 0
                                                                }}  
                                                                style={{position: "absolute", margin: 0}}>{props.item.quantity}</motion.p> 
                                                        </AnimatePresence>
                                                        <p style={{margin: 0, marginLeft: "2rem"}}>in cart</p>
                                                    </motion.div>
                                                </AnimatePresence>
                                                <button id="quantButton" onClick={()=>{increaseQuantity(); dispatch(modifyQuantity({id: props.item.id, variant: props.item.variant, newQuantity: props.item.quantity + 1}))}}>
                                                    <motion.p
                                                    key={`incQuant${props.item.quantity}IC`}  
                                                    initial={{rotate: incCounter > decCounter ? "-90deg" : "90deg" }}
                                                    animate={{rotate: 0, transition:{duration: 0.2}}}
                                                    exit={{rotate: incCounter > decCounter ? "90deg" : "-90deg"}}>+</motion.p>
                                                </button>
                                            </div> 
                                        </AnimatePresence>
                                    </div> 
                                    <button id="removeFromCart" onClick={()=>{dispatch(removeFromCart({id: props.item.id, variant: props.item.variant}));}}>Remove from cart</button>
                                </div>
                            </motion.div> 
    )
}