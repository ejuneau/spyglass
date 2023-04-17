import React from "react";
import './CartPage.css';
import './CartPageDesktop.css';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../Util/Store/cartSlice";
import binos from '../../Assets/Images/CartPage/binos.png';
import NTSH from '../../Assets/Images/CartPage/NTSH.png';
import { motion, AnimatePresence } from "framer-motion";
import LWYS from '../../Assets/Images/CartPage/LWYS.webp';
import CartListItem from './CartListItem';
import { useState } from 'react';
import { setMenuColor } from "../../Util/Store/menuSlice";
import { useEffect } from "react";
import Button from "../../Util/Button";
import { setLoading } from "../../Util/Store/LoadingSlice";
import LoadingPage from "../../Util/LoadingPage";

export default function CartPage(props) {
    const cart = useSelector((state) => state.cart);
    const showMenu = useSelector((state) => state.menu.showMenu)
    const antiRotateBy = useSelector((state) => state.rotate.antiRotateBy);
    const rotateBy = useSelector((state) => state.rotate.rotateBy);
    const [hoverLink, sethoverLink] = useState(false);
    const isLoading = useSelector((state) => state.loading.isLoading);
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
        useEffect(
          () => {
          cart.contents.length === 0 ? dispatch(setMenuColor('var(--white')) : dispatch(setMenuColor('var(--red)'));
          dispatch(setLoading(false))
          return () => {
            dispatch(setMenuColor('var(--red)'))
          }
        }, [])
    const  formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'CAD',
    } );
    return (
      isLoading ? <LoadingPage /> :
(
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
                    {/* <button id="dumpCart" onClick={()=> {dispatch(clearCart())}}>Dump entire cart</button>  */}
                    <Button text="Clear Cart" onClick={() => {dispatch(clearCart())}}/>
                    </motion.div>
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
                     
                      <motion.div key="totalCostContainer" style={{position: 'relative'}} layout>
                        <motion.p key="totalTitleText" layout style={{display: "inline", marginRight: "18rem", width: 'fit-content'}}>Total:</motion.p>
                        <AnimatePresence mode="sync" >
                          <motion.p 
                            key={`total${cart.total}`} 
                            initial={{rotate: -90, opacity: 0}} 
                            animate={{rotate: 0, opacity: 1}} 
                            style={{position: 'absolute', left: '9rem', width: 'fit-content'}}
                            exit={{rotate: 90, opacity: 0, transition: {duration: 0.5}}} >{formatter.format(cart.total)}</motion.p>
                        </AnimatePresence>
                      </motion.div>
                      <Link id="checkoutButton" to="./Checkout"><Button text="Checkout" /></Link>
                    </motion.div>
                }
                </AnimatePresence>
            </motion.div>
            <div className="CartPageSpacer" />
        </div>
      )
    )
}