import React, { useContext } from "react"
import { cartContext } from "../Global/cartContext"
import {Link} from "react-router-dom"

const Cart = (props) => {

    const { dispatch, shoppingCart,  qty } = useContext(cartContext);
    console.log("total qty: ", qty);

    return (
        <div className="cartContainer">
            <div className="cartDetails">
                {shoppingCart.length ? shoppingCart.map(product => (
                    <div className="cart" key={product.id}>
                        <span className="cartProImage"><img src={product.image} alt="" />
                            <span className="imageCount">{product.qty}</span>
                        </span>
                        <span className="cartProductName">{product.name}</span>
                        <span className="cartProductPrice">${product.price}.00</span>
                        {/* <span className="inc" onClick={() => dispatch({ type: 'INC', id: product.id })}>
                            <i className="fas fa-plus"></i>
                        </span> */}
                        <span className="productQuantity">{product.qty}</span>
                        {/* <span className="dec" onClick={() => dispatch({ type: 'DEC', id: product.id })}>
                            <i className="fas fa-minus"></i></span> */}
                        <span className="productTotalPrice">${product.qty * product.price}.00</span>
                        {/* <button onClick={() => dispatch({ type: 'DELETE_PRODUCT', id: product.id })} className="deleteCartPro">
                            <i className="fas fa-trash-alt"></i></button> */}
                    </div>
                )) : 'Yourr Cart is currently empty!'}
                <br/>
                <button className="goBack"><Link to="/">Go Back</Link></button>

            </div>
       
</div>
    )
}

export default Cart;