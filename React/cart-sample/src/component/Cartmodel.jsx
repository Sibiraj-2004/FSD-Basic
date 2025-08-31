import React from 'react'

function Cartmodel({closecart,CartItem,removecart}) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
        <div className='bg-white p-6 rounded-lg w-80 shadow-xl'>
            <h2 className='text-2xl font-bold text-indigo-600 mb-4'>Your Cart</h2>
            {CartItem.length > 0 ? (
              <div>
                {CartItem.map((item) => (
                  <div key={item.id} className='flex justify-between items-center mb-2'>
                    <img src={item.image} alt={item.title} className='w-24 h-12 px-6' />
                    <div className='text-gray-600'>{item.title}</div>
                    <button onClick={() => removecart(item.id)} className='text-red-500 hover:underline'>Remove</button>
                  </div>
                ))}
              </div>
            ):(<p className='text-xl font-semibold text-gray-700'>Your Cart is Empty</p>
            )}
            <button onClick={closecart} className='mt-4 bg-indigo-500 text-white w-full py-2 rounded-full'>Close</button>
            
        </div>

    </div>
  )
}

export default Cartmodel