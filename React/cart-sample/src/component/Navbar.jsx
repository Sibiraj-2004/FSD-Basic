import React from 'react'

function Navbar({opencart,cartcount}) {
  return (
    <nav className='bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300  fixed top-0 left-0 w-full z-50 shadow-md'>
      <div className='flex justify-between items-center px-6 py-3'>
      <h1 className='text-white font-bold text-4xl'>Store</h1>
      <button onClick={opencart} className='border  bg-yellow-300 rounded-full shadow-lg py-2 px-4'>cart:{cartcount}</button>
      </div>
    </nav>
  )
}

export default Navbar