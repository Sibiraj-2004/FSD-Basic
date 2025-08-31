import React, { useEffect, useState } from 'react'

function Product({CartItem,setCartItem}) {
    const [product,setproduct]=useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=> res.json())
        .then(data=>setproduct(data))
    },[]);

    const addcart=(product)=>{
      if(CartItem.find((item) => item.id===product.id)){
        alert('Product Already in Cart')
      }
      else{
      setCartItem([...CartItem,product])
      }
    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-4 pt-20'>
      {product.map((product)=>(
      <div key={product.id} className='border-gray-300 p-4 rounded-lg shadow-lg bg-white flex flex-col justify-between'>
        <img src={product.image} alt={product.title} className='h-40 mx-auto mb-4'/>
        <h2 className='text-lg font-semibold mb-2 text-gray-700'>{product.title}</h2>
        <p className='text-lg text-red-500 font-bold'>${product.price}</p>
        <button onClick={()=>addcart(product)} className='bg-green-500 text-white w-full py-2 my-2 rounded-full hover:bg-green-600 font-semibold'>Add to Cart</button>
      </div>
      ))}  
    </div>
  )
}

export default Product