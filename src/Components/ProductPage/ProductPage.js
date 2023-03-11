import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Products from "../../Util/Products";
import {useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../../Util/cartSlice";
import './ProductPage.css';

export default function ProductPage(props) {
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();
    function increaseQuantity() {setQuantity(quantity + 1)}
    function decreaseQuantity() { quantity>=0?setQuantity(quantity - 1):setQuantity(0)}
    let { name } = useParams(); 
    const emoji = ["🤓","👀","🕶️","😎","🥸","👓"];
    document.title = `The ${name} | Spyglass Eyewear ${emoji[Math.floor(Math.random()*emoji.length)]}`;


    const product = Products[Products.map(function(e) { return e.name; }).indexOf(name)];
    return (
        <div className="ProductPageComponent">
            <h1>{product.name}</h1>
            <img src={product.variants[0].photos.front} />
            <button onClick={()=>{decreaseQuantity()}}>-</button><button onClick={() =>{dispatch(addToCart({id: product.id, quantity: quantity}))}}>Add {quantity} to cart</button><button onClick={()=>{increaseQuantity()}}>+</button>
        </div>
    )
}