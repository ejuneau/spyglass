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
    const {front, back, action} = product.variants[searchParams.get("variant")?searchParams.get("variant"):0].photos;
    const srcArray = [front, back, action];

    const componentVariants = {
        initial: {

        },
        show: {

            transition: {
                staggerChildren: 0.3
            }
        }
    }
    const backButtonVariants = {
        initial: {x: "-200vw"}, 
        show:{x: 0, transition: {x:{duration: 0.2}}}
    }

    const productTitleVariants = {
        initial:{x: 1000}, 
        show:{x:0}
    }
    const slideShowVariants = {
        initial:{opacity: 0}, 
        show:{opacity:1}
    }
    return (
        <motion.div key="ProductPageComponent" className="ProductPageComponent" variants={componentVariants} initial="initial" animate="show">
           
            <Link style={{rotate: rotateBy}} to="/Shop" className="backButton"><motion.div key="backButton" variants={backButtonVariants} >{"back"}</motion.div></Link>
            <div key="productTitleContainer" className="productTitleContainer" ><motion.h2 key="The" variants={productTitleVariants}>The</motion.h2><motion.h1 key="productName" variants={productTitleVariants}>{product.name}</motion.h1> </div>
            <motion.div key="slideShowContainer" className="slideShowContainer" varinats={slideShowVariants} > 
            <SlideShow id="test" srcArray={srcArray} antiRotateBy={antiRotateBy} rotateBy={rotateBy} tanRotateBy={tanRotateBy}/>
            </motion.div>
            {product.variants.length > 1 &&  
                <div className="variantsContainer" style={{rotate: antiRotateBy}}>
                {
                product.variants.map(variant => {
                    return  (
                        <img 
                        key={`variant${product.variants.indexOf(variant)}`}   
                        style={{borderRadius: "50%", }} src={variant.circleColor} 
                        fill={variant.circleColor} 
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
            </div>
            <div className="descriptionContainer">
                <p className="productDescription">{product.variants[searchParams.get("variant")?searchParams.get("variant"):0].description}</p>
            </div>
            <div className="spacer" />
        </motion.div>
    )
}

function CartButtons(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const variant = Number(searchParams.get("variant")); 
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.contents)
    function increaseQuantity() {props.setQuantity(props.quantity + 1)}
    function decreaseQuantity() { props.quantity>1?props.setQuantity(props.quantity - 1):props.setQuantity(1)}

    if (cart.filter(item => item.id === props.product.id).find(item => item.variant === variant)) {
            // if the item that is in the cart is the same variant

            return (
            <>
                <div id="addToCartButtons">
                    <button id="quantButton" onClick={()=>{decreaseQuantity(); dispatch(modifyQuantity({id: props.product.id, variant: searchParams.get("variant")?Number(searchParams.get("variant")):0, newQuantity: props.quantity - 1}))}}>-</button>
                    <button>{cart.filter(item => item.id === props.product.id).find(item=>item.variant === variant).quantity} in cart</button>
                    <button id="quantButton" onClick={()=>{increaseQuantity(); dispatch(modifyQuantity({id: props.product.id, variant: searchParams.get("variant")?Number(searchParams.get("variant")):0, newQuantity: props.quantity + 1}))}}>+</button>
                </div> 
                <button onClick={()=>{dispatch(removeFromCart({id: props.product.id}));props.setQuantity(1)}}>Remove from cart</button>
            </>)
    } else {

            return (
            <div id="addToCartButtons"> 
                <button id="quantButton" onClick={()=>{decreaseQuantity()}}>-</button>
                <button onClick={()=>{dispatch(addToCart({id: props.product.id, quantity: props.quantity, variant: searchParams.get("variant")?Number(searchParams.get("variant")):0}))}}>Add {props.quantity} to cart</button>
                <button id="quantButton" onClick={()=>{increaseQuantity()}}>+</button>
            </div>)
        }
    

}


