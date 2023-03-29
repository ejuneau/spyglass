import React from "react";
import './CartPage.css';
import './CartPageDesktop.css';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, modifyQuantity, removeFromCart, clearCart } from "../../Util/cartSlice";
import binos from '../../Assets/Images/binos.png';
import NTSH from '../../Assets/Images/NTSH.png';
import { motion } from "framer-motion";
import Products from "../../Util/Products";
import LWYS from '../../Assets/Images/LWYS.webp';

export default function CartPage(props) {
    const cart = useSelector((state) => state.cart)
    const antiRotateBy = useSelector((state) => state.rotate.antiRotateBy);
    const rotateBy = useSelector((state) => state.rotate.rotateBy);
    const dispatch = useDispatch();

    const  formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'CAD',
    } );
    return (
        <div className="CartPageComponent">
            <div className="CartPageSpacer" />
            {
                    cart.contents.length > 0 && <>
                    
                    <img src={LWYS} alt="like what you see?" id="LWYS" />
                    <button id="dumpCart" onClick={()=> {dispatch(clearCart())}}>Dump entire cart</button> </>
                }
            <div className="cartList">
                {
                    cart.contents.length > 0 && cart.contents.map((item) => {
                        // console.log(item);
                        return (
                            <div className="cartListItem" key={`${item.id}-${item.variant}`}>
                                <Link id="titlePic" to={`/Shop/Product/${Products.find(items => items.id === item.id).name}${Products.find(items => items.id === item.id).variants.length > 1?`?variant=${item.variant}`:''}`} >
                                    <h1>The {Products.find(items => items.id === item.id).name}</h1>
                                    <img id="cartImg" src={Products.find(items => items.id === item.id).variants[item.variant].photos.front} alt={`The ${Products.find(items => items.id === item.id).name}, seen from the front`} />
                                </Link>
                                <div id="cartPageOptions">
                                <div className="cartPageOptionsContainer">
                                    <button id="quantButton" onClick={()=>{dispatch(modifyQuantity({id: item.id, variant: item.variant, newQuantity: item.quantity - 1}))}}>-</button>
                                    <button id="quant">{item.quantity}</button>
                                    <button id="quantButton" onClick={()=>{dispatch(modifyQuantity({id: item.id, variant: item.variant, newQuantity: item.quantity + 1}))}}>+</button>
                                </div> 
                                <button id="removeFromCart" onClick={()=>{dispatch(removeFromCart({id: item.id}));}}>Remove from cart</button>
                                </div>
                            </div>
                            
                        )
                    })
                }
                {
                    cart.contents.length === 0 &&
                    <div className="NTSH">
                        <img id="NTSH" src={NTSH} style={{rotate: antiRotateBy}} alt="Nothing to see here" />
                        <motion.img  key="binos" id="binos" animate={{x: ["-20%", "20%"], y: ["0%", "15%", "0%"], rotate: ["0deg", "-20deg", "-40deg"], transition: {duration: 2, repeat: Infinity, repeatType: "mirror"}}} src={binos} alt="binoculars in search of frames" />
                        <Link  style={{rotate: rotateBy}} to="/Shop" id="emptyCartShop">Take a look</Link>
                    </div>
                }
                {
                    cart.contents.length > 0 &&
                    <div className="total">
                        <p>Total: {formatter.format(cart.total)}</p>
                        <Link id="checkoutButton" to="./Checkout">Checkout</Link>
                    </div>
                }
            
            </div>
            <div className="CartPageSpacer" />
        </div>

    )
}