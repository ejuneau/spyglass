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
            <div>Like what you see?</div>
            <div className="cartList">
                {
                    cart.contents.length > 0 && <button onClick={()=> {dispatch(clearCart())}}>Dump entire cart</button>
                }
                {
                    cart.contents.length > 0 && cart.contents.map((item) => {
                        return (
                            <div className="cartListItem" key={`${item.id}-${item.variant}`}>
                                <h1>The {Products.find(items => items.id === item.id).name}</h1>
                                <img src={Products.find(items => items.id === item.id).variants[item.variant].photos.front} alt={`The ${Products.find(items => items.id === item.id).name}, seen from the front`} />
                                <input min="1" 
                                type="number" 
                                defaultValue={item.quantity}
                                onChange={(e)=>{dispatch(modifyQuantity({id: item.id, newQuantity: Number(e.target.value)}))}} />
                                <button onClick={()=>dispatch(removeFromCart({id: item.id}))}>Remove from cart</button>
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