import React from 'react'
import './Products.css'



function Products(props){

    return(

 <>
 <div class="card">
   
  <img src={props.imgsrc} alt="Denim Jeans" ></img>
  <h1>Tailored Jeans</h1>
  <p class="price">$19.99</p>
  <p>Some text about the jeans.</p>
  <p><button>Add to Cart</button></p>
</div>
 </>       
    )
}

export default Products;