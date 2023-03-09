import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import Products from "../../Util/Products";

export default function ProductPage(props) {
    let { name } = useParams(); 
    const emoji = ["🤓","👀","🕶️","😎","🥸","👓"];
    document.title = `The ${name} | Spyglass Eyewear ${emoji[Math.floor(Math.random()*emoji.length)]}`;


    const product = Products[Products.map(function(e) { return e.name; }).indexOf(name)];
    return (
        <div className="ProductPageComponent">
            <h1>{product.name}</h1>
            <img src={product.variants[0].photos.front} />
        </div>
    )
}