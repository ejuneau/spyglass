import React, {useState, useEffect} from "react";
import { isMobile } from "react-device-detect";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import './Product.css';
import './ProductDesktop.css';
import { Link } from "react-router-dom";
import IGMYOY from '../../../Assets/Images/ShopPage/IGMYOY.png';
import verbose from '../../../Util/Store/verbose'



export default function Product(props) {
    const [currentVariant, setCurrentVariant] = useState(0);
    const cart = useSelector((state) => state.cart.contents)
    const [isHover, setIsHover] = useState(false);
	const [rotateBy, setRotateBy] = useState(Math.ceil(Math.random() * 5) * (Math.round(Math.random()) ? 1 : -1));
	const handleHoverChange = (state) => {setIsHover(state)}
    

    const clipX= 15;
    const clipY= 100 - clipX;

    const variants = {

        show: {
            rotate: isHover?0:rotateBy,
			scale: isHover? 1.25 : 1
        }
    }
    

    
useEffect(() => {
	setRotateBy(Math.ceil(Math.random() * 5) * (Math.round(Math.random()) ? 1 : -1))
}, [handleHoverChange])

function FrontImage()  { return  <img key={ `Product ID:${props.product.id} image-front`  } src={ props.product.variants[currentVariant].photos.front  } style={{ paddingRight: "2rem" }} id={isMobile?"mobileImg1":"Img1"} alt="Front view of Frames" onLoad={() => console.log(props.product.name + ": front loaded")}/> }
function ActionImage() { return  <img key={ `Product ID:${props.product.id} image-action` } src={ props.product.variants[currentVariant].photos.action } style={{ paddingLeft:  "2rem" }} id={isMobile?"mobileImg2":"Img2"} alt="Model wearing Frames" onLoad={() => console.log(props.product.name + ": action loaded")}/> }

const isInCart = cart.filter(item => item.id === props.product.id).find(item=>item.variant === currentVariant);     
return (
	<motion.div 
	key={`Product ID: ${props.product.id}`} 
	style={{ outline: "1px solid #0A0A0A", backgroundColor: isInCart?"#E0E0E0":"var(--white)"}} 
	variants={variants} 
	layout 
	initial="show" 
	animate="show" 
	exit={{opacity: 0}}
	className="ProductComponent" 
	id={props.product.id} 
	onMouseEnter={() => {!isMobile && handleHoverChange(true)}} 
	onMouseLeave={()=>{!isMobile && handleHoverChange(false)}} 
	>
		{isInCart && <img id="IGMYOY" src={IGMYOY} alt="In Cart indicator"/>}
			<motion.div  
				key={`container for ${props.product.id} ${currentVariant}`} 
				style={{overflow:"hidden"}} 
				animate={{rotate: isHover?`0`:`-${rotateBy}deg`, clipPath: `polygon(${isHover?"0":clipX}% 0%, 100% ${isHover?"0":clipX}%, ${isHover?"100":clipY}% 100%, 0% ${isHover?"100":clipY}%)`, 
				transition: {duration: 0.3, type: "spring", damping: 10, stiffness: 100}}}
			>
				<Link to={props.product.variants.length>1?`/Shop/Product/${props.product.name}?variant=${currentVariant}`:`/Shop/Product/${props.product.name}`}>
					<motion.div  key={`container for ${props.product.id}`} >
					{ isMobile ? (
						<motion.div  
							id="productImages" 
							layout 
							key={`Images for ${props.product.id}`} 
							style ={{   overflowX: "scroll",
							scrollSnapType: "x mandatory",}}
						>
							<img key={ `Product ID:${props.product.id} image-front`  } src={ props.product.variants[currentVariant].photos.front  } style={{ paddingRight: "2rem" }} id="Img1" alt="Front view of Frames" onLoad={() => {props.incrementImgCounter(); verbose && console.log(props.product.name + ": front loaded")}}/>
							<img key={ `Product ID:${props.product.id} image-action` } src={ props.product.variants[currentVariant].photos.action } style={{ paddingLeft:  "2rem" }} id="Img2" alt="Model wearing Frames" onLoad={() => {props.incrementImgCounter(); verbose && console.log(props.product.name + ": action loaded")}}/>
				
						</motion.div>
					):(
						<motion.div  
							id="productImages" 
							layout 
							key={`Images for ${props.product.id} ${currentVariant}`} 
							initial={{x: "0%"}}
							whileHover={{x: "calc(-100% - 4rem)"}}
						>

							<img key={ `Product ID:${props.product.id} image-front`  } src={ props.product.variants[currentVariant].photos.front  } style={{ paddingRight: "2rem" }} id="Img1" alt="Front view of Frames" onLoad={() => {props.incrementImgCounter(); verbose && console.log(props.product.name + ": front loaded")}}/>

							<img key={ `Product ID:${props.product.id} image-action` } src={ props.product.variants[currentVariant].photos.action } style={{ paddingLeft:  "2rem" }} id="Img2" alt="Model wearing Frames" onLoad={() => {props.incrementImgCounter(); verbose && console.log(props.product.name + ": action loaded")}}/>
						</motion.div>

					)}
					</motion.div> 
				</Link> 
			</motion.div> 
		<div className="titleContainer">
			<p className="the">THE</p>
			<p className="productTitle">{props.product.name}</p>
			<div className="productPriceVariants">
				<p className="productPrice">{`$${props.product.price}.00`}</p>
				{props.product.variants.length > 1 && (
				<div className="productVariants">
					{props.product.variants.map(variant => {
					return  (
						<img 
						key={`variant${props.product.variants.indexOf(variant)}`}   
						alt={`Variant button ${variant}`}
						style={{border: currentVariant===props.product.variants.indexOf(variant)?"3px solid var(--red)":"3px solid var(--black)"}} 
						src={variant.circleColor} onClick={()=>{setCurrentVariant(props.product.variants.indexOf(variant)); }} />
						)})}
				</div>
				)}
			</div>
		</div>
	</motion.div>

    )
}