import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar'
import Product from './component/product'
import Cartmodel from './component/cartmodel';


function App() {

  const [CartItem,setCartItem]=useState([])
  const [Iscartopen,setIscartopen]=useState(false);

  const opencart=()=>{
    setIscartopen(true);
  }

  const closecart=()=>{
    setIscartopen(false);
  }

  const removecart = (productId) =>{
    setCartItem(CartItem.filter((item) => item.id !== productId))
  }

  return (
    <div className='bg-gray-200 min-h-screen'>
    <Navbar cartcount={CartItem.length} opencart={opencart} />
    <Product CartItem={CartItem} setCartItem={setCartItem} />
    {
      Iscartopen &&(
        <Cartmodel CartItem={CartItem} closecart={closecart} removecart={removecart}/>
      )
    }
    
    </div>
  )
}

export default App
