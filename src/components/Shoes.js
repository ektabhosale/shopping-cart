import React, {useContext} from "react"
import { productContext } from "../Global/productContext"
import {cartContext} from "../Global/cartContext"
import Banner from "./Banner"
import Sidebar from '../Sidebar'
import Topnav from '../Topnav'
const Shoes = () => {
    const {shoes} = useContext(productContext);
   const {dispatch} = useContext(cartContext);
   const data= useContext(cartContext);
   console.log(data);
    return(
        <>
        <div className="row" style={{marginTop: '30px'}}>
        <Topnav />
        <Banner />
        <Sidebar />
        
        {shoes.map(product => (
            <div className="row" key={product.id}>
              <div className="column">
            <div className="">
              <img src={product.image} alt="Not found"/>
            </div>
            <div className="productDetails">
                <div className="proName">
                 <h4>{product.name}</h4>
                </div>
               <div className="proPrice">
                   ${product.price}.00
               </div>
            </div>
            <div className="proButton" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, Shoes})}>
                 <button  >add to cart</button>
               </div>
             
               {product.productStatus === 'new' ? <div className="new">New</div>: ''}
               {product.productStatus === 'hot' ? <div className="hot">Hot</div>: ''}
               </div>
            </div>
        ))}
        
        </div>
      
        </>
    )
}
export default Shoes;