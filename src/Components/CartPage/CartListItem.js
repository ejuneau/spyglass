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
        setDecCounter(0);
        setIncCounter(prevNumber => prevNumber + 1);

    }
    function decreaseQuantity() { 
        setIncCounter(0);
        setDecCounter(prevNumber => prevNumber + 1);
    }
    useEffect(()=> {
        setDecDirection(incCounter > decCounter ? {initial: "1rem", exit: "-1rem"} : {initial: "-1rem", exit: "1rem"});
    }, [incCounter, decCounter])
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


                                    <AnimatePresence mode="sync">
                <div className="CartPageButtonsContainer" id="CartPageButtons" >
                    <AnimatePresence mode="popLayout">
                        <motion.div 
                        id="CartPageInCart"
                        key="inCart" 
                        initial={{scaleX: 0}}
                        animate={{scaleX: [-1, 1], transition: {duration: 0.2}}}
                        exit={{scaleY: 0}}
                        style={{ background: "#C92403", position: "relative", display: 'flex', color:"var(--white)", fontFamily:"Noir", margin: 0, display: "flex", alignItems: "center", fontSize:"1rem"}}>
                             
                             
                            {/* Decrease Quantity / Remove from cart*/}
                             <button id="quantButton" onClick={()=>{decreaseQuantity(); dispatch(modifyQuantity({id: props.item.id, variant: props.item.variant, newQuantity: props.item.quantity - 1}))}}>
                                <AnimatePresence mode="wait">
                                    <motion.div 
                                    layout
                                    key={`CartPagedecQuant${props.item.quantity}IC`} 
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
                                        }}>
                                        {
                                            props.item.quantity === 1 ?
                                            <FontAwesomeIcon id="cartTrash" icon={solid("trash-can")} /> :
                                            <p>-</p>
                                        
                                        }
                                    </motion.div>
                                </AnimatePresence>
                            </button>

                            {/* In Cart/ Not In Cart*/}
                            <div id="ICNIC">
                                <div id="ICquantContainer" style={{position: "relative", width: "1rem", alignSelf: "center"}}>
                                    <AnimatePresence mode="popLayout">
                                        <motion.p 
                                        key={props.item.quantity} 
                                        initial={{
                                            opacity: 0, 
                                            y: incCounter > decCounter ? "3vh" : "-5vh",
                                            scaleY: 0
                                        }} 
                                            animate={{
                                                opacity: 1, 
                                                y: 0,
                                                scaleY: 1
                                            }} 
                                            exit={{
                                                opacity: 0, 
                                                y: incCounter > decCounter ? "-5vh"  :"3vh",
                                                scaleY: 0
                                            }}  
                                            >{ cart.length > 0 && props.item.quantity}
                                        </motion.p> 
                                    </AnimatePresence>
                                </div>
                                <motion.p       
                                    key="cartPageCartCount"                  
                                    initial={{
                                        opacity: 0, 
                                        y: "3vh"}} 
                                    animate={{
                                        opacity: 1, 
                                        y: 0}} 
                                    exit={{
                                        opacity: 0, 
                                        y: "3vh"}} >in cart
                                </motion.p>
                            </div>

                            {/* Increase Quantity*/}
                            <button id="quantButton" onClick={()=>{increaseQuantity(); dispatch(modifyQuantity({id: props.item.id, variant: props.item.variant, newQuantity: props.item.quantity + 1}))}}>
                                <motion.p
                                    key={`CartPageincQuant${props.item.quantity}IC`}  
                                    initial={{rotate: incCounter > decCounter ? "-90deg" : "90deg" }}
                                    animate={{rotate: 0, transition:{duration: 0.2}}}
                                    exit={{rotate: incCounter > decCounter ? "90deg" : "-90deg"}}>
                                        +
                                </motion.p>
                            </button>
                        </motion.div>
                    </AnimatePresence>
                </div> 
                
            </AnimatePresence>
                                    </div> 
                                    <button id="removeFromCart" onClick={()=>{dispatch(removeFromCart({id: props.item.id, variant: props.item.variant}));}}>Remove from cart</button>
                                </div>
                            </motion.div> 
    )
}