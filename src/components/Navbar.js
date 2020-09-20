import React, {useContext} from "react"
import {cartContext} from "../Global/cartContext"
import {Link} from "react-router-dom"

const Navbar = ({cartToggle}) => {
   const {shoppingCart} = useContext(cartContext);
    return(
        <nav>
 <ul className="left">
 <li><Link to="/">Fixta Fashion</Link></li>
 {/* <li><form>
     <input type="text" className="search" placeholder="Search Product..."/>
     </form></li> */}
 </ul>
 <ul className="right">
    <li onClick={cartToggle}>
    <Link to="/cart">
   
    <span className="shoppingCartTotal">{shoppingCart ? shoppingCart.length : 0}</span>
    <span className="dollor">
    <i className="fas fa-cart-plus"></i>
    </span>
    <span className="dollor">
    <i class="fas fa-user"></i> Alexa
    </span>

    
    </Link>
    </li>
    
 </ul>
</nav>
    )

}

export default Navbar;