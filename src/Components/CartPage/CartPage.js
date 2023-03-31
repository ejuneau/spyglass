import React from "react";
import './CartPage.css';
import './CartPageDesktop.css';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, modifyQuantity, removeFromCart, clearCart } from "../../Util/cartSlice";
import binos from '../../Assets/Images/binos.png';
import NTSH from '../../Assets/Images/NTSH.png';
import { motion, AnimatePresence } from "framer-motion";
import Products from "../../Util/Products";
import LWYS from '../../Assets/Images/LWYS.webp';
import CartListItem from './CartListItem';
import { useState } from 'react';

export default function CartPage(props) {
    const cart = useSelector((state) => state.cart);
    const showMenu = useSelector((state) => state.menu.showMenu)
    const antiRotateBy = useSelector((state) => state.rotate.antiRotateBy);
    const rotateBy = useSelector((state) => state.rotate.rotateBy);
    const [hoverLink, sethoverLink] = useState(false);
    const dispatch = useDispatch();
    const animationVariants = {
        initial: {
          opaicty: 0,
          transition: {
            duration: 0.2
          }
        },
        animate: {
          opacity: 1,
          transition: {
            duration: 0.25
          }
        },
        exit: {
          opacity: 0,
          transition: {
            duration: 0.1
          }
        }
      } 

      const outlineVariants = {
        initial: {
          opacity: 0, 
          maskImage: "radial-gradient(circle, rgba(10,10,10,0) 0%, rgba(10,10,10,1) 0%, rgba(10,10,10,1) 100%)"
        },
        animate: {
          opacity: showMenu ? 0: 1, 
          maskImage: "radial-gradient(circle, rgba(10,10,10,0) 10%, rgba(10,10,10,1) 50%, rgba(10,10,10,1) 100%)", 
          top: hoverLink ? "-75vh" : [
            "0vh", "-150vh", "0vh", "-150vh", "-75vh", "0vh"], 
          left: hoverLink ? "-75vw" : ["-150vw", "-150vw", "0vw", "0vw", "-75vw", "-150vw"], 
          transition: hoverLink ? {duration: 0.2} : {
            top: {
              duration: 10, repeat: Infinity, repeatType: "loop"
            }, 
            left: {
              duration: 10, repeat: Infinity, repeatType: "loop"
            },
            opacity: {duration: 0.2}, 
            maskImage: {duration: 0.2, delay: 0.5}
            }
          }
        }
      

    const  formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'CAD',
    } );
    return (
        <div className="CartPageComponent">
            <div className="CartPageSpacer" />
            {cart.contents.length === 0 && <motion.div id="outline" key="outline" variants={outlineVariants} initial="initial" animate="animate" ></motion.div>}
            <motion.div key="cartList" className="cartList" variants={animationVariants}
            layout 
            initial="initial" 
            animate="animate" 
            exit="exit" >
                <AnimatePresence mode="sync">
                {
                    cart.contents.length > 0 && <motion.div key="LWYS" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    
                    <img src={LWYS} alt="like what you see?" id="LWYS" />
                    <button id="dumpCart" onClick={()=> {dispatch(clearCart())}}>Dump entire cart</button> </motion.div>
                }
                {
                cart.contents.length > 0 && cart.contents.map((item) => {
                    // console.log(item);
                    return (
                        <CartListItem key={`${item.id}-${item.variant}`} item={item}/>
                    )
                })
                }
                
                
                {
                    cart.contents.length === 0 &&
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} layout key="NTSH" className="NTSH">
                        <img id="NTSH" src={NTSH} style={{rotate: antiRotateBy}} alt="Nothing to see here" />
                        <motion.img  key="binos" id="binos" animate={{x: hoverLink?"20%":["-20%", "20%"], y: hoverLink?"15%":["0%", "15%", "0%"], rotate: hoverLink?"-50deg":["0deg", "-20deg", "-40deg"], transition: hoverLink?{duration: 0.2}:{duration: 2, repeat: Infinity, repeatType: "mirror"}}} src={binos} alt="binoculars in search of frames" />
                        <Link  style={{rotate: rotateBy}} to="/Shop" id="emptyCartShop" onMouseEnter={()=> {sethoverLink(true)}} onMouseLeave={()=> {sethoverLink(false)}}>Take a look</Link>
                    </motion.div>
                }
                {
                    cart.contents.length > 0 &&
                    <motion.div key="Total" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="total">
                        <p>Total: {formatter.format(cart.total)}</p>
                        <Link id="checkoutButton" to="./Checkout">Checkout</Link>
                    </motion.div>
                }
                </AnimatePresence>
            </motion.div>
            <div className="CartPageSpacer" />
        </div>

    )
}