import React, {useState} from "react";
import { motion } from "framer-motion";
import './Product.css';

//SOMETHING WITH FRAMER MOTION - implement filtering

export default function Product(props) {
    const [isHover, setIsHover] = useState(false);
    const handleHoverChange = (state) => {
        setIsHover(state);
    }
    const rotateBy = (Math.random() * (0.2 - 0.01)) + 0.01;
    console.log(rotateBy);
    const clipX= 15;
    const clipY= 100 - clipX;
    return (
        <motion.div key={`Product ID: ${props.product.id}`} style={{ outline: "1px solid #0A0A0A"}} layout animate={{rotate: isHover?0:`${rotateBy}rad`, scale: isHover?1.1:1}} className="ProductComponent" id={props.product.id} onMouseEnter={() => {handleHoverChange(true)}} onMouseLeave={()=>{handleHoverChange(false)}}>
            <motion.img key={`Product ID:${props.product.id} image`} src={isHover?props.product.photos.action:props.product.photos.front} animate={{rotate: isHover?`0`:`-${rotateBy}rad`, clipPath: `polygon(${isHover?0:clipX}% 0%, 100% ${isHover?0:clipX}%, ${isHover?100:clipY}% 100%, 0% ${isHover?100:clipY}%)`}}/>
            <div className="titleContainer"><p className="the">the</p><p className="productTitle">{props.product.name}</p> <p className="productPrice">{`$${props.product.price}.00`}</p></div>
        </motion.div>
    )
}