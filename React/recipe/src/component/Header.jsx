import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className='bg-blue-400 p-4 h-16 fixed top-0 left-0 w-full z-50 shadow-md'>
      <div className='container mx-auto flex justify-between'>
        <h1 className='text-3xl font-bold text-white'>Recipe Detail</h1>
        <nav>
          <Link to='/' className='mr-4  text-lg text-white'>Search</Link>
          <Link to='/Favorites'className='text-lg text-white'>Favorites</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header