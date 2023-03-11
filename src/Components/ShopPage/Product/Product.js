import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import './Product.css';

//SOMETHING WITH FRAMER MOTION - implement filtering

export default function Product(props) {
    const [currentVariant, setCurrentVariant] = useState(0);
    const [isHover, setIsHover] = useState(false);
    const [isImageHover, setIsImageHover] = useState(false);
    const [rotateBy, setRotateBy] = useState((Math.random() * (0.2 - 0.01)) + 0.01);
    const handleHoverChange = (state) => {
        setIsHover(state);
    }
    
    useEffect(() => {
        setRotateBy(Math.random() * (0.2 - 0.01) + 0.01)
    },[isHover])
    const clipX= 15;
    const clipY= 100 - clipX;
    return (
        <motion.div key={`Product ID: ${props.product.id}`} style={{ outline: "1px solid #0A0A0A"}} layout animate={{rotate: isHover?0:`${rotateBy}rad`, scale: isHover?1.1:1, transition: {duration: 0.2, type: "spring", damping: 10, stiffness: 100}}} className="ProductComponent" id={props.product.id} onMouseEnter={() => {handleHoverChange(true)}} onMouseLeave={()=>{handleHoverChange(false)}}>
            <motion.img key={`Product ID:${props.product.id} image`} layout src={isImageHover?props.product.variants[currentVariant].photos.action:props.product.variants[currentVariant].photos.front} animate={{rotate: isHover?`0`:`-${rotateBy}rad`, clipPath: `polygon(${isHover?0:clipX}% 0%, 100% ${isHover?0:clipX}%, ${isHover?100:clipY}% 100%, 0% ${isHover?100:clipY}%)`, transition: {duration: 0.3, type: "spring", damping: 10, stiffness: 100}}} onMouseEnter={() => {setIsImageHover(true)}} onMouseLeave={()=>{setIsImageHover(false)}}/>
            <div className="titleContainer">
                <p className="the">THE</p>
                <p className="productTitle">{props.product.name}</p>
                <div className="productPriceVariants">
                    <p className="productPrice">{`$${props.product.price}.00`}</p>
                    {props.product.variants.length > 1 && (
                        <div className="productVariants">
                        {props.product.variants.map(variant => {
                            return  (
                            <img key={`variant${props.product.variants.indexOf(variant)}`}   style={{borderRadius: "50%", outline: currentVariant===props.product.variants.indexOf(variant)?"3px solid var(--red)":"3px solid var(--black)"}} src={variant.circleColor} stroke={props.product.variants.indexOf(variant)===currentVariant?"#FC5130":"#0A0A0A"} fill={variant.circleColor} onMouseEnter={()=>{setCurrentVariant(props.product.variants.indexOf(variant))}}/>
                                // <circle cx="2vh" cy="2vh" r="1.5vh"  strokeWidth="3" stroke={props.product.variants.indexOf(variant)===currentVariant?"red":"black"} fill={variant.circleColor} onMouseEnter={()=>{setCurrentVariant(props.product.variants.indexOf(variant))}}/>
                           )
                        })}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    )
}