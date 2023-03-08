import React from "react";
import './Product.css';

//SOMETHING WITH FRAMER MOTION - implement filtering
export default function Product(props) {
    return (
        <div style={{ rotate: `0.1rad`, outline: "1px solid #0A0A0A"}} className="ProductComponent" id={props.product.id} >
            <img src={props.product.photos.action} />
            <div className="titleContainer"><p className="the">the</p><p className="productTitle">{props.product.name}</p> <p className="productPrice">{`$${props.product.price}.00`}</p></div>
        </div>
    )
}