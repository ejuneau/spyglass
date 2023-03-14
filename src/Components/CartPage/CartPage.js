import React from "react";
import './CartPage.css';
import { useSelector, useDispatch } from "react-redux";
import { addToCart, modifyQuantity, removeFromCart, clearCart } from "../../Util/cartSlice";
import Products from "../../Util/Products";

export default function CartPage(props) {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    return (
        <div className="CartPageComponent">
            <div className="cartList">
                {
                    cart.contents.length > 0 && <>
                    <button onClick={()=> {dispatch(clearCart())}}>Dump entire cart</button>
                    <h1>Like What you See?</h1> </>
                }
                {
                    cart.contents.length > 0 && cart.contents.map((item) => {
                        console.log(item);
                        return (
                            <div className="cartListItem" key={`${item.id}-${item.variant}`}>
                                <h1>The {Products.find(items => items.id === item.id).name}</h1>
                                <img src={Products.find(items => items.id === item.id).variants[item.variant].photos.front} alt={`The ${Products.find(items => items.id === item.id).name}, seen from the front`} />
                                <input min="1" 
                                type="number" 
                                defaultValue={item.quantity}
                                onChange={(e)=>{dispatch(modifyQuantity({id: item.id, variant: item.variant, newQuantity: Number(e.target.value)}))}} />
                                <button onClick={()=>dispatch(removeFromCart({id: item.id, variant: item.variant}))}>Remove from cart</button>
                            </div>
                        )
                    })
                }
                {
                    cart.contents.length === 0 &&
                    <div className="NTSH">
                        <h1>Nothing to see here</h1>
                    </div>
                }

            </div>
        </div>

    )
}