import React, {useState, useEffect, useRef} from "react";
import { isMobile } from "react-device-detect";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import './Product.css';
import './ProductDesktop.css';
import { Link, useSearchParams } from "react-router-dom";
import IGMYOY from '../../../Assets/Images/IGMYOY.png';


//SOMETHING WITH FRAMER MOTION - implement filtering

export default function Product(props) {
	const boundaries = useRef(null);
    const genderFilter = useSelector((state) => state.filter.gender);
    const [currentVariant, setCurrentVariant] = useState(0);
    const cart = useSelector((state) => state.cart.contents)
    const [isHover, setIsHover] = useState(false);
    const [rotateBy, setRotateBy] = useState((Math.random() * (0.1 - 0.01) + 0.01)*(Math.random() > 0.5?1:-1));
    const handleHoverChange = (state) => {
        state && setIsHover(state);
		if (!state) {setIsHover(!isHover)}

    }
    
    // useEffect(() => {
    //     setRotateBy((Math.random() * (0.1 - 0.01) + 0.01)*(Math.random() > 0.5?1:-1));
    // },[isHover])
    const clipX= 15;
    const clipY= 100 - clipX;

    const variants = {

        show: {
            rotate: isHover?0:`${rotateBy}rad`,
        }
    }


      const [imgsLoaded, setImgsLoaded] = useState(false)
      const isInCart = cart.filter(item => item.id === props.product.id).find(item=>item.variant === currentVariant);
      useEffect(() => {
        const loadImage = images => {
          return new Promise((resolve, reject) => {
            const loadFront = new Image()
            const loadAction = new Image()
            loadFront.src = images.front
            loadAction.src = images.action
            // wait 2 seconds to simulate loading time
            loadFront.onload = () =>
              setTimeout(() => {
                resolve(images.front)
              }, 0)
            loadAction.onload = () =>
              setTimeout(() => {
                resolve(images.action)
              }, 0)
      
            loadFront.onerror = err => reject(err)
            loadAction.onerror = err => reject(err)
          })
        }
      
        Promise.all(props.product.variants.map(variant => {loadImage(variant.photos)}))
          .then(() => setImgsLoaded(true))
          .catch(err => console.log("Failed to load images", err))
      }, [])

function FrontImage() { return  <img key={`Product ID:${props.product.id} image-front`} src={props.product.variants[currentVariant].photos.front} style={{paddingRight: "2rem", }}  id={isMobile?"mobileImg1":"Img1"}/> }
function ActionImage() { return  <img key={`Product ID:${props.product.id} image-action`} src={props.product.variants[currentVariant].photos.action} style={{paddingLeft: "2rem", }} id={isMobile?"mobileImg2":"Img2"}/>}
    return imgsLoaded?(
        <div>
         {isMobile && <motion.div 
          key={`Product ID: ${props.product.id}`} 
          style={{ outline: "1px solid #0A0A0A", backgroundColor: isInCart?"#E0E0E0":"var(--white)"}} 
          layout 
          exit={{opacity: 0}}
          className="ProductComponent" 
          id={props.product.id} 
		  initial={{opacity: 0}}
		  whileInView={{opacity: 1}}
          >
            {isInCart && <img id="IGMYOY" src={IGMYOY} alt="In Cart indicator"/>}
            <Link to={props.product.variants.length>1?`/Shop/Product/${props.product.name}?variant=${currentVariant}`:`/Shop/Product/${props.product.name}`}>
              <motion.div  
			  key={`container for ${props.product.id}`} 
			   
			  >
                <motion.div  
				id="productImages" 
				layout 
				key={`Images for ${props.product.id}`} 
				style ={{   overflowX: "scroll",
					scrollSnapType: "x mandatory",
        }}
				>
                  <FrontImage id="mobileImg1" />
                  <ActionImage id="mobileImg2"/>
                </motion.div>
              </motion.div> 
            </Link>  
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
						  style={{border: currentVariant===props.product.variants.indexOf(variant)?"3px solid var(--red)":"3px solid var(--black)"}} 
						  src={variant.circleColor} onClick={()=>{setCurrentVariant(props.product.variants.indexOf(variant)); }} />
                          )})}
                    </div>
                  )}
                </div>
            </div>
          </motion.div>}

		  {!isMobile && <motion.div 
          key={`Product ID: ${props.product.id}`} 
          style={{ outline: "1px solid #0A0A0A"}} 
          variants={variants} 
          layout 
          initial="show" 
          animate="show" 
          exit={{opacity: 0}}
          className="ProductComponent" 
          id={props.product.id} 
          onMouseEnter={() => {handleHoverChange(true)}} 
          onMouseLeave={()=>{handleHoverChange(false)}} 
          >
            <Link to={props.product.variants.length>1?`/Shop/Product/${props.product.name}?variant=${currentVariant}`:`/Shop/Product/${props.product.name}`}>
              <motion.div  
			  key={`container for ${props.product.id} ${currentVariant}`} 
			  style={{overflow:"hidden"}} 
			  animate={{rotate: isHover?`0`:`-${rotateBy}rad`, clipPath: `polygon(${isHover?0:clipX}% 0%, 100% ${isHover?0:clipX}%, ${isHover?100:clipY}% 100%, 0% ${isHover?100:clipY}%)`, 
			  transition: {duration: 0.3, type: "spring", damping: 10, stiffness: 100}}}>
                <motion.div  
				id="productImages" 
				layout 
				key={`Images for ${props.product.id} ${currentVariant}`} 
				initial={{x: "0%"}}
				whileHover={{x: "calc(-100% - 4rem)"}}
				>
                  <FrontImage />
                  <ActionImage />
                </motion.div>
              </motion.div> 
            </Link>  
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
						  style={{border: currentVariant===props.product.variants.indexOf(variant)?"3px solid var(--red)":"3px solid var(--black)"}} 
						  src={variant.circleColor} onClick={()=>{setCurrentVariant(props.product.variants.indexOf(variant)); }} />
                          )})}
                    </div>
                  )}
                </div>
            </div>
          </motion.div>}
        </div>
    ):<h1>loading</h1>
}