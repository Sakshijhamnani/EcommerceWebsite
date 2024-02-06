import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Store from './Components/Store/Store';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';

import { useState } from 'react';
import Cart from './Components/Modal/Cart';
import CartProvider from './Components/Context/CartProvider';

function App() {
  const [cartIsShown,setCartIsShown]=useState(false)

  const showCartHandler=()=>{
    setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setCartIsShown(false)
    
  }
  return (
    <div>
      <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Navbar onClick={showCartHandler}/>
      <Banner/>
      <Store/>
      <Footer/>
      {/* <Modal/> */}
      </CartProvider>
    
    </div>
  );
}

export default App;
