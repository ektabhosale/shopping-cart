import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import {Products,Jewel} from "./components/Products"
import Cart from "./components/Cart"
import Shoes from "./components/Shoes"
import ProductContextProvider from "./Global/productContext"
import CartContextProvider from "./Global/cartContext"
import Topnav from "./Topnav";
// import jewellery from './components/Jewellery'

function App() {

  return (
    <div>
      {/* <Topnav /> */}
      <ProductContextProvider>
      <CartContextProvider>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/shoes" exact component={Shoes} />
          <Route path="/jewellery" exact component={Jewel} />
        </Switch>
      </Router>
      </CartContextProvider>
      </ProductContextProvider>  
    </div>
  );
}

export default App;
