import React from 'react'
import './Topnav.css'

function Topnav() {

  return (
    <div className="navbar" >
      <a href="#home">Fixta Fashion</a>
      <div className="nav-right">
        
        <a href="#news"> <span className="shoppingCart">
          <i className="fas fa-cart-plus"></i></span> Cart</a>
        <a href="#contact" ><i class="fas fa-user"></i> Alexa</a>
      </div>

      {/* <ul className="nav-right">
  <li className="navbar">
  <a href="#contact" >
  tada
  </a>
  </li>
  <a href="#contact" >
  <li className="navbar">
  tada
  </li>
  </a>
</ul> */}

    </div>
  )
}

export default Topnav;