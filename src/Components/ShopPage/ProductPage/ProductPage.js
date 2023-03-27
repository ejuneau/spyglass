import React, {useState, useEffect, lazy } from "react";
import { Link, useParams } from "react-router-dom";
import Products from "../../../Util/Products";
import {useSelector, useDispatch } from 'react-redux';
import { addToCart, modifyQuantity, removeFromCart } from "../../../Util/cartSlice";
import './ProductPage.css';
import './ProductPageDesktop.css';
import { useSearchParams } from "react-router-dom";
import {motion, AnimatePresence} from 'framer-motion';
import { SlideShow } from "./SlideShow.tsx";

export default function ProductPage(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [quantity, setQuantity] = useState(1);
    let { name } = useParams(); 
    const emoji = ["🤓","👀","🕶️","😎","🥸","👓"];
    document.title = `The ${name} | Spyglass Eyewear ${emoji[Math.floor(Math.random()*emoji.length)]}`;
    const tanRotateBy = useSelector((state) => state.rotate.tanRotateBy);
    const cart = useSelector((state) => state.cart.contents);
    const rotateBy = useSelector((state) => state.rotate.rotateBy);
    const antiRotateBy = useSelector((state) => state.rotate.antiRotateBy);
    const product = Products[Products.map(function(e) { return e.name; }).indexOf(name)];
    const {front, back, action} = product.variants[searchParams.get("variant")?searchParams.get("variant"):0].detailPhotos;
    const srcArray = [front, back, action];
    const componentVariants = {
        initial: {

        },
        show: {

            transition: {
                staggerChildren: 0.3,
                staggerDirection: -1
            }
        }
    }
    const backButtonVariants = {
        initial: {x: "200vw"}, 
        show:{x: 0, transition: {x:{duration: 0.2}}}
    }

    const productTitleVariants = {
        initial:{
            x: "100vw", 
            y: `calc(-100vw * ${tanRotateBy})`,
        }, 
        show:{
            x:0, 
            y:0,     
        }
    }
    const slideShowVariants = {
        initial:{
            x: "-100vw",
            y: `calc(100vw * ${tanRotateBy})`,
            opacity: 0
        }, 
        show:{
            x:0,
            y: 0,
            opacity: 1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
        }}
    }
    return (
        <motion.div key="ProductPageComponent" className="ProductPageComponent" variants={componentVariants} initial="initial" animate="show">
           

            <div key="productTitleContainer" className="productTitleContainer" >
                <motion.h1 key="productName" style={{rotate: rotateBy}} variants={productTitleVariants}><em>the {product.name}</em> </motion.h1>
            </div>
            <motion.div key="slideShowContainer" className="slideShowContainer" variants={slideShowVariants} > 
                <SlideShow id="test" srcArray={srcArray} antiRotateBy={antiRotateBy} rotateBy={rotateBy} tanRotateBy={tanRotateBy}/>
            </motion.div>
            <div className="desktopDivider">
            {product.variants.length > 1 &&  
                <div className="variantsContainer" >
                    <p>Available in:</p>
                {
                product.variants.map(variant => {
                    return  (
                        <img 
                        key={`variant${product.variants.indexOf(variant)}`}   
                        style={{borderRadius: "50%", }} src={variant.circleColor} 
                        fill={variant.circleColor} 
                        className={`Variant ${Number(searchParams.get("variant")) === product.variants.indexOf(variant) && "activeVariant"}`}
                        onClick={()=>{
                            setSearchParams({variant: product.variants.indexOf(variant)}); 
                            setQuantity(cart.filter(item => item.id === product.id)
                            .find(item=>item.variant !== Number(searchParams.get("variant")))?
                                cart.filter(item => item.id === product.id)
                                .find(item=>item.variant !== Number(searchParams.get("variant"))).quantity
                                :1)}} 
                        />
                        )
                }
                )}
                </div>
            }
            <div className="cartOptionsContainer">
                <CartButtons product={product} quantity={quantity} setQuantity={setQuantity}/>
                <div className="priceContainer"><p id="price">${product.price}</p><p id="cents">.<u>00</u></p></div>

            </div>
            <div className="descriptionContainer">
                <h2>About these frames</h2>
                <p className="productDescription">{product.variants[searchParams.get("variant")?searchParams.get("variant"):0].description}</p>
            </div>
            </div>
            <Link style={{rotate: rotateBy}} to="/Shop" className="backButton">
                <motion.div key="backButton" variants={backButtonVariants} >
                    {"back"}
                </motion.div>
            </Link>
            <div className="spacer" />
        </motion.div>
    )
}

function CartButtons(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const rotateBy = useSelector((state) => state.rotate.rotateBy);
    const variant = Number(searchParams.get("variant")); 
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.contents)
    const [decCounter, setDecCounter] = useState(0);
    const [incCounter, setIncCounter] = useState(0);
    const [decDirection, setDecDirection] = useState({initial: "1rem", exit: "-1rem"});

    function increaseQuantity() {
        props.setQuantity(prevNumber => prevNumber + 1);
        setDecCounter(0);
        setIncCounter(prevNumber => prevNumber + 1);
    }
    function decreaseQuantity() { 
        props.quantity>1?props.setQuantity(props.quantity - 1):props.setQuantity(1);  
        setIncCounter(0);
        setDecCounter(prevNumber => prevNumber + 1);
    }
    useEffect(()=> {
        console.log(incCounter, decCounter);
        setDecDirection(incCounter > decCounter ? {initial: "1rem", exit: "-1rem"} : {initial: "-1rem", exit: "1rem"});
        console.log(decDirection)
    }, [incCounter, decCounter])


    return(
   <AnimatePresence mode="wait">
    {cart.filter(item => item.id === props.product.id).find(item => item.variant === variant) && 
            // if the item that is in the cart is the same variant
            <AnimatePresence mode="sync">
                <motion.button 
                key="removeCart" 
                id="removeCart" 
                initial={{scaleX: 0, x: "-5vw"}} 
                animate={{scaleX: 1, x: 0}} 
                exit={{scaleX: 0}} 
                onClick={()=>{dispatch(removeFromCart({id: props.product.id}));props.setQuantity(1)}}>
                    <p>Remove all?</p>
                </motion.button>

                <div className="CartButtonsContainer" id="isInCart" style={{rotate: rotateBy}}>
                    <button id="quantButton" onClick={()=>{decreaseQuantity(); dispatch(modifyQuantity({id: props.product.id, variant: searchParams.get("variant")?Number(searchParams.get("variant")):0, newQuantity: props.quantity - 1}))}}>
                        <AnimatePresence mode="wait">
                            <motion.p 
                            layout
                            key={`decQuant${props.quantity}IC`} 
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
                                }}>-</motion.p>
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
                                key={cart.filter(item => item.id === props.product.id).find(item=>item.variant === variant).quantity} 
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
                                    style={{position: "absolute", margin: 0}}>{cart.filter(item => item.id === props.product.id).find(item=>item.variant === variant).quantity}</motion.p> 
                            </AnimatePresence>
                            <p style={{margin: 0, marginLeft: "2rem"}}>in cart</p>
                        </motion.div>
                    </AnimatePresence>
                    <button id="quantButton" onClick={()=>{increaseQuantity(); dispatch(modifyQuantity({id: props.product.id, variant: searchParams.get("variant")?Number(searchParams.get("variant")):0, newQuantity: props.quantity + 1}))}}>
                        <motion.p
                        key={`incQuant${props.quantity}IC`}  
                        initial={{rotate: incCounter > decCounter ? "-90deg" : "90deg" }}
                        animate={{rotate: 0, transition:{duration: 0.2}}}
                        exit={{rotate: incCounter > decCounter ? "90deg" : "-90deg"}}>+</motion.p>
                    </button>
                </div> 
                
            </AnimatePresence>
}
{    !cart.filter(item => item.id === props.product.id).find(item => item.variant === variant) && 

                <div className="CartButtonsContainer" id="isNotInCart" style={{rotate: rotateBy}}> 
                    <button id="quantButton" onClick={()=>{decreaseQuantity()}}>
                        <AnimatePresence mode="wait">
                            <motion.p 
                            layout
                            key={`decQuant${props.quantity}NIC`}  
                            initial={{x: decCounter<incCounter?"-1rem":"1rem", opacity: 0, transition:{duration: 0.1}}} 
                            animate={{x: 0, opacity: 1, transition:{duration: 0.1}}} 
                            exit={{x: decCounter<incCounter?"1rem":"-1rem", opacity: 0, transition:{duration: 0.1}}}>-</motion.p>
                        </AnimatePresence>
                    </button>
                    <AnimatePresence mode="popLayout">
                        <motion.div 
                        key="notInCart"  
                        initial={{opacity: 0, y: "-5vh"}} 
                        animate={{opacity: 1, y: 0}} 
                        exit={{opacity: 0, y: "-5vh"}} 
                        style={{position: "relative", display: 'flex', color:"var(--white)", fontFamily:"Noir", margin: 0, display: "flex", alignItems: "center", fontSize:"1.2rem"}} 
                        onClick={()=>{dispatch(addToCart({id: props.product.id, quantity: props.quantity, variant: searchParams.get("variant")?Number(searchParams.get("variant")):0}))}}>
                                <p style={{margin: 0, marginRight: "1rem"}}>Add</p>
                                <AnimatePresence>
                                <motion.p 
                                style={{position: "absolute", margin: 0, marginLeft: "3rem"}} 
                                key={props.quantity} 
                                initial={{
                                    opacity: 0, 
                                    y: incCounter>decCounter?"5vh":"-5vh",
                                    scaleY: 0
                                    }} animate={{
                                        opacity: 1, 
                                        y:0,
                                        scaleY: 1}} 
                                    exit={{
                                        opacity: 0, 
                                        y:incCounter>decCounter?"-5vh":"5vh",
                                        scaleY: 0
                                        }}>{props.quantity}</motion.p> 
                            </AnimatePresence> 
                                <p style={{margin: 0, marginLeft: "1rem"}}>to cart</p>
                        </motion.div>
                    </AnimatePresence>
                    <button id="quantButton" onClick={()=>{increaseQuantity()}}>
                        <motion.p
                        key={`incQuant${props.quantity}NIC`}  
                        initial={{rotate: incCounter > decCounter ? "-90deg" : "90deg" }}
                        animate={{rotate: 0, transition:{duration: 0.2}}}
                        exit={{rotate: incCounter > decCounter ? "90deg" : "-90deg"}}>+</motion.p>
                    </button>
                </div>

    }
        
    
    </AnimatePresence>)
}


