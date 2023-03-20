import React, {useState, useEffect, lazy } from "react";
import { Link, useParams } from "react-router-dom";
import Products from "../../../Util/Products";
import {useSelector, useDispatch } from 'react-redux';
import { addToCart, modifyQuantity, removeFromCart } from "../../../Util/cartSlice";
import './ProductPage.css';
import { useSearchParams } from "react-router-dom";
import {motion, AnimatePresence} from 'framer-motion';
import { SlideShow } from "./SlideShow.tsx";

export default function ProductPage(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [quantity, setQuantity] = useState(1);
    let { name } = useParams(); 
    const emoji = ["🤓","👀","🕶️","😎","🥸","👓"];
    document.title = `The ${name} | Spyglass Eyewear ${emoji[Math.floor(Math.random()*emoji.length)]}`;

    const cart = useSelector((state) => state.cart.contents);
    const rotateBy = useSelector((state) => state.rotate.rotateBy);
    const antiRotateBy = useSelector((state) => state.rotate.antiRotateBy);
    const product = Products[Products.map(function(e) { return e.name; }).indexOf(name)];
    const {front, back, action} = product.variants[searchParams.get("variant")?searchParams.get("variant"):0].photos;
    const srcArray = [front, back, action];
    return (
        <div className="ProductPageComponent" >
           
            <Link style={{rotate: rotateBy}} to="/Shop" className="backButton"><motion.div key="backButton" initial={{x: "200vw"}} animate={{x: "4vw", transition: {x:{duration: 0.5}, repeat: Infinity, repeatType:"reverse"}}} >{"back"}</motion.div></Link>
            <div className="productTitleContainer"><h2>The</h2><h1>{product.name}</h1> </div>
            <SlideShow srcArray={srcArray} antiRotateBy={antiRotateBy} rotateBy={rotateBy}/>
            {product.variants.length > 1 && product.variants.map(variant => {
                                    return  (
                                        <img key={`variant${product.variants.indexOf(variant)}`}   style={{borderRadius: "50%", }} src={variant.circleColor} fill={variant.circleColor} onClick={()=>{setSearchParams({variant: product.variants.indexOf(variant)}); setQuantity(cart.filter(item => item.id === product.id).find(item=>item.variant !== Number(searchParams.get("variant")))?cart.filter(item => item.id === product.id).find(item=>item.variant !== Number(searchParams.get("variant"))).quantity:1) }  } />
                                        )})}
            <div className="cartOptionsContainer">
                <CartButtons product={product} quantity={quantity} setQuantity={setQuantity}/>
            </div>
            <div className="descriptionContainer">
                <p className="productDescription">{product.variants[searchParams.get("variant")?searchParams.get("variant"):0].description}</p>
            </div>
            <div className="spacer" />
        </div>
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

            return (<> 
            <button onClick={()=>{decreaseQuantity()}}>-</button>
            <button onClick={()=>{dispatch(modifyQuantity({id: props.product.id, variant: searchParams.get("variant")?Number(searchParams.get("variant")):0, newQuantity: props.quantity}))}}>Set cart to {props.quantity}</button>
            <button onClick={()=>{increaseQuantity()}}>+</button>
            <button onClick={()=>{dispatch(removeFromCart({id: props.product.id}));props.setQuantity(1)}}>Remove {cart.filter(item => item.id === props.product.id).find(item=>item.variant === variant).quantity} currently in cart</button>
            </>)
    } else {

            return (<> 
                {props.quantity !== 1 && <button onClick={()=>{decreaseQuantity()}}>-</button>}
                <button onClick={()=>{dispatch(addToCart({id: props.product.id, quantity: props.quantity, variant: searchParams.get("variant")?Number(searchParams.get("variant")):0}))}}>Add {props.quantity} to cart</button>
                <button onClick={()=>{increaseQuantity()}}>+</button>
            </>)
        }
    

}


