import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import Products from "../../Util/Products";
import {useSelector, useDispatch } from 'react-redux';
import { addToCart, modifyQuantity, removeFromCart } from "../../Util/cartSlice";
import './ProductPage.css';

export default function ProductPage(props) {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    function increaseQuantity() {setQuantity(quantity + 1)}
    function decreaseQuantity() { quantity>1?setQuantity(quantity - 1):setQuantity(1)}
    let { name } = useParams(); 
    const emoji = ["🤓","👀","🕶️","😎","🥸","👓"];
    document.title = `The ${name} | Spyglass Eyewear ${emoji[Math.floor(Math.random()*emoji.length)]}`;


    const product = Products[Products.map(function(e) { return e.name; }).indexOf(name)];
    const cart = useSelector((state) => state.cart.contents)
    return (
        <div className="ProductPageComponent">
            <Link to="/spyglass/Shop">Back</Link>
            <h1>{product.name}</h1>
            <img src={product.variants[0].photos.front} />
            <div className="cartOptionsContainer">
                {
                !cart.find(item => item.id === product.id) &&  //if item is not in cart, show options to add to cart
                <> 
                    {quantity !== 1 && <button onClick={()=>{decreaseQuantity()}}>-</button>}
                    <button onClick={()=>{dispatch(addToCart({id: product.id, quantity: quantity}))}}>Add {quantity} to cart</button>
                    <button onClick={()=>{increaseQuantity()}}>+</button>
                </>
                }
                {
                cart.find(item => item.id === product.id) &&  //if item is in cart, show options to remove or modify quantity
                <> 
                    <button onClick={()=>{decreaseQuantity()}}>-</button>
                    <button onClick={()=>{dispatch(modifyQuantity({id: product.id, newQuantity: quantity}))}}>Set cart to {quantity}</button>
                    <button onClick={()=>{increaseQuantity()}}>+</button>
                    <button onClick={()=>{dispatch(removeFromCart({id: product.id}));setQuantity(1)}}>Remove {cart.find(item => item.id === product.id).quantity} currently in cart</button>
                </>
                }
            </div>
        </div>
    )
}