import React, {useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Products from "../../../Util/Products";
import {useSelector, useDispatch } from 'react-redux';
import { addToCart, modifyQuantity } from "../../../Util/Store/cartSlice";
import './ProductPage.css';
import './ProductPageDesktop.css';
import { useSearchParams } from "react-router-dom";
import {motion, AnimatePresence} from 'framer-motion';
import { SlideShow } from "./SlideShow.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Button from "../../../Util/Button";
import { setLoading } from "../../../Util/Store/LoadingSlice";
import LoadingPage from "../../../Util/LoadingPage";


export default function ProductPage(props) {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const [quantity, setQuantity] = useState(1);


    const tanRotateBy = useSelector((state) => state.rotate.tanRotateBy);
    const cart = useSelector((state) => state.cart.contents);
    const rotateBy = useSelector((state) => state.rotate.rotateBy);
    const antiRotateBy = useSelector((state) => state.rotate.antiRotateBy);
    const isLoading = useSelector((state) => state.loading.isLoading)

    const [name, setName] = useState(useParams().name);
    const [product, setProduct] = useState( Products[Products.map(e => e.name).indexOf(name)] );
    let initialPhotos = product.variants[searchParams.get("variant")?searchParams.get("variant"):0].detailPhotos
    const [srcArray, setSrcArray] = useState([initialPhotos.front, initialPhotos.back, initialPhotos.action])

    useEffect(() => {
        setProduct(Products[Products.map(e => e.name).indexOf(name)])
        const emoji = ["🤓","👀","🕶️","😎","🥸","👓","🥽","🔍","🔎","🔭"];
        document.title = `The ${name} ${emoji[Math.floor(Math.random()*emoji.length)]} Spyglass Eyewear `;
        return () => {
            document.title = `Spyglass Eyewear ${emoji[Math.floor(Math.random()*emoji.length)]}`;
        }
    }, []);
    useEffect(() => {
        dispatch(setLoading(true))
        let {front, back, action} = product.variants[searchParams.get("variant")?searchParams.get("variant"):0].detailPhotos;
        setSrcArray([front, back, action]);
    }, [setProduct]);
    useEffect(() => {
        dispatch(setLoading(false))
        const newImgs = product.variants[searchParams.get("variant")?searchParams.get("variant"):0].detailPhotos;
        const newArray = [...srcArray]
        newArray[0] = newImgs.front;
        newArray[1] = newImgs.back;
        newArray[2] = newImgs.action
        setSrcArray(newArray);
    }, [searchParams])
    const componentVariants = {
        initial: {},
        show: {
            transition: {
                staggerChildren: 0.2,
                staggerDirection: -1
            }
        },
        exit: {
            staggerChildren: 0.2,
            staggerDiretion: 1
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
    // const slideShowVariants = {
    //     initial:{
    //         x: "-100vw",
    //         y: `calc(100vw * ${tanRotateBy})`,
    //         opacity: 0
    //     }, 
    //     show:{
    //         x:0,
    //         y: 0,
    //         opacity: 1,
    //         // transition: {
    //         //     x: { type: "spring", stiffness: 300, damping: 30 },
    //         //     y: { type: "spring", stiffness: 300, damping: 30 },
    //         //     opacity: { duration: 0.2 }
    //         // }
    // },
    //     exit:{
    //         x:"100vw",
    //         y:`calc(-100vw * ${tanRotateBy})`,
    //         opacity: 0
    //     }
    // }
    const slideShowVariants = {
        enter: (direction) => {
          return {
            x: direction > 0 ? 1000 : -1000,
            scale: 1.2,
            // y: direction > 0 ? props.tanRotateBy * 1000 :  props.tanRotateBy * -1000,
            opacity: 0
          };
        },
        center: {
          zIndex: 1,
          x: 0,
          // y: 50,
          opacity: 1,
          scale: 1.2,
        },
        exit: (direction) => {
          return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            // y: direction < 0 ? props.tanRotateBy * 1000 :  props.tanRotateBy * -1000,
            opacity: 0
          };
        }
      };
    return (
        <motion.div key="ProductPageComponent" className="ProductPageComponent" variants={componentVariants} initial="initial" animate="show" exit="exit">
            <AnimatePresence mode="wait">
                <motion.div key={`slideShowContainer ${searchParams.get("variant")?searchParams.get("variant"):0}`} className="slideShowContainer" variants={slideShowVariants} > 
                    <SlideShow id="test" srcArray={srcArray} antiRotateBy={antiRotateBy} rotateBy={rotateBy} tanRotateBy={tanRotateBy}/>
                </motion.div>
            </AnimatePresence>
            <div className="desktopDivider">
                <div className="cartOptionsContainer">
                    <CartButtons product={product} quantity={quantity} setQuantity={setQuantity}/>
                    <div className="priceContainer">
                        <p id="price">${product.price}</p>
                        <p id="cents">.<u>00</u></p>
                    </div>
                    
                </div>
                <div className ="TitleDescription">
                    <div key="productTitleContainer" className="productTitleContainer" >
                        <motion.h1 key="productName" style={{rotate: rotateBy}} variants={productTitleVariants}><em>the {product.name}</em> </motion.h1>
                    </div>
                    {product.variants.length > 1 &&  
                    <div className="variantsContainer" >
                        <p>Available in:</p>
                        {
                        product.variants.map(variant => {
                        return  (
                            <Link to={`/Shop/Product/${product.name}?variant=${product.variants.indexOf(variant)}`} key={`VariantButtonLink${product.variants.indexOf(variant)}`} replace>
                                <img 
                                key={`variant${product.variants.indexOf(variant)}`}   
                                style={{borderRadius: "50%", }} src={variant.circleColor} 
                                fill={variant.circleColor} 
                                alt={`Variant button ${variant}`}
                                className={`Variant ${Number(searchParams.get("variant")) === product.variants.indexOf(variant) && "activeVariant"}`}
                                onClick={()=>{
                                    setQuantity(cart.filter(item => item.id === product.id)
                                        .find(item=>item.variant !== Number(searchParams.get("variant"))) ?
                                        cart.filter(item => item.id === product.id)
                                            .find(item=>item.variant !== Number(searchParams.get("variant"))).quantity
                                            : 1 );
                                    }} 
                                />
                            </Link>
                        )})}
                    </div>
                    }
                    <div className="descriptionContainer">
                        <h2>About these frames</h2>
                        <p className="productDescription">{product.variants[searchParams.get("variant")?searchParams.get("variant"):0].description}</p>
                    </div>
                </div>
            </div>
                <motion.div  className ="backButton" key="backButton" variants={backButtonVariants} >
                    <Link to="/Shop" style={{display: "inline-block"}}><Button text="back" /></Link>
                </motion.div>

            <div className="cutoutSpacer" />
            <div className="spacer" />
        </motion.div>
        )
}

function CartButtons(props) {
    const [searchParams] = useSearchParams();
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
        setDecDirection(incCounter > decCounter ? {initial: "1rem", exit: "-1rem"} : {initial: "-1rem", exit: "1rem"});
    }, [incCounter, decCounter])


    return(
   <AnimatePresence mode="wait">
    {cart.filter(item => item.id === props.product.id).find(item => item.variant === variant) && 
            // if the item that is in the cart is the same variant

            
            <AnimatePresence mode="sync">
                <div className="CartButtonsContainer" id="isInCart" style={{rotate: rotateBy}}>
                    <AnimatePresence mode="popLayout">
                        <motion.div 
                        id="inCart"
                        key="inCart" 
                        initial={{scaleX: 0}}
                        animate={{scaleX: [-1, 1], transition: {duration: 0.2}}}
                        exit={{scaleY: 0}}
                        style={{clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)", background: "#C92403", position: "relative", color:"var(--white)", fontFamily:"Noir", margin: 0, display: "flex", alignItems: "center", fontSize:"1.2rem"}}>
                             
                             
                            {/* Decrease Quantity / Remove from cart*/}
                             <button id="quantButton" onClick={()=>{decreaseQuantity(); dispatch(modifyQuantity({id: props.product.id, variant: searchParams.get("variant")?Number(searchParams.get("variant")):0, newQuantity: props.quantity - 1}))}}>
                                <AnimatePresence mode="wait">
                                    <motion.div 
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
                                        }}>
                                        {
                                            cart.filter(item => item.id === props.product.id).find(item => item.variant === variant).quantity === 1 ?
                                            <FontAwesomeIcon id="productTrash" icon={solid("trash-can")} /> :
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
                                        key={cart.filter(item => item.id === props.product.id).find(item=>item.variant === variant).quantity} 
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
                                            >{cart.filter(item => item.id === props.product.id).find(item=>item.variant === variant).quantity}
                                        </motion.p> 
                                    </AnimatePresence>
                                </div>
                                <motion.p                         
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
                            <button id="quantButton" onClick={()=>{increaseQuantity(); dispatch(modifyQuantity({id: props.product.id, variant: searchParams.get("variant")?Number(searchParams.get("variant")):0, newQuantity: props.quantity + 1}))}}>
                                <motion.p
                                    key={`incQuant${props.quantity}IC`}  
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
}
{    !cart.filter(item => item.id === props.product.id).find(item => item.variant === variant) && 
                //if item is not in cart
                <div className="CartButtonsContainer" id="isNotInCart" style={{rotate: rotateBy}}> 
                    <AnimatePresence mode="popLayout">
                        <motion.div 
                        key="notInCart" 
                        id="notInCart"  
                        initial={{scaleY: 0}}
                        animate={{scaleY: [-1, 1], transition: {duration: 0.2}}}
                        exit={{scaleX: 0}}
                        style={{clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)", background: "var(--red)", position: "relative", color:"var(--white)", fontFamily:"Noir", margin: 0, display: "flex", alignItems: "center", fontSize:"1.2rem"}} 
                        onClick={()=>{dispatch(addToCart({id: props.product.id, quantity: props.quantity, variant: searchParams.get("variant")?Number(searchParams.get("variant")):0}))}}>
                            
                            {/* Decrease Quantity*/}
                            <button id="quantButton" onClick={()=>{decreaseQuantity()}}>
                                <AnimatePresence mode="wait">
                                    <motion.div 
                                    layout
                                    key={`decQuant${props.quantity}NIC`}  
                                    initial={{x: decCounter<incCounter?"-1rem":"1rem", opacity: 0, transition:{duration: 0.1}}} 
                                    animate={{x: 0, opacity: 1, transition:{duration: 0.1}}} 
                                    exit={{x: decCounter<incCounter?"1rem":"-1rem", opacity: 0, transition:{duration: 0.1}}}>
                                    {
                                        props.quantity === 1 ?
                                        <motion.p></motion.p>:
                                        <motion.p 
                                        layout
                                        key={`decQuant${props.quantity}NIC`}  
                                        initial={{x: decCounter<incCounter?"-1rem":"1rem", opacity: 0, transition:{duration: 0.1}}} 
                                        animate={{x: 0, opacity: 1, transition:{duration: 0.1}}} 
                                        exit={{x: decCounter<incCounter?"1rem":"-1rem", opacity: 0, transition:{duration: 0.1}}}>-</motion.p>

                                    }
                                    </motion.div>
                                </AnimatePresence>
                            </button>


                            {/* Add to Cart*/}
                            <div id="ICNIC">
                                <motion.p 
                                key="addToCart" 
                                initial={{opacity: 0, y: "-5vh"}} 
                                animate={{opacity: 1, y: 0}} 
                                exit={{opacity: 0, y: "-5vh"}} style={{margin: 0}}>
                                    Add to cart
                                </motion.p>
                            </div>
                            {/* Increase Quantity */}
                            <button id="quantButton" onClick={()=>{dispatch(addToCart({id: props.product.id, quantity: props.quantity, variant: searchParams.get("variant")?Number(searchParams.get("variant")):0}))}}>
                                <motion.p
                                key={`incQuant${props.quantity}NIC`}  
                                initial={{rotate: incCounter > decCounter ? "-90deg" : "90deg" }}
                                animate={{rotate: 0, transition:{duration: 0.2}}}
                                exit={{rotate: incCounter > decCounter ? "90deg" : "-90deg"}}>+</motion.p>
                            </button>
                        </motion.div>
                    </AnimatePresence>
                </div>

    }
        
    
    </AnimatePresence>)
}


