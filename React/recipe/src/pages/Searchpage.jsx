import React, { useState } from 'react'
import { useRecipeContext } from '../context/RecipeContext'
import Recipecard from '../component/Recipecard';
import { getrecipe } from '../services/Api'


function Searchpage() {
const {state, dispatch}= useRecipeContext();
const [query,setQuery]=useState('');

const handleSearch= async () => {
const data=await getrecipe(query);
console.log(data);
dispatch({type:'SET_RECIPE',payload:data.results})
}


return (
<div className='p-4'>
  <div className='container mx-auto pt-10 px-2 flex flex-col items-center'>
    <div className='mb-4 w-full'>
      <input
        type="text"
        placeholder='Search Recipes...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='border rounded w-full px-4 py-2 mt-6'
      />
      <button
        onClick={handleSearch}
        className='bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg'
      >
        Search
      </button>
    </div>

    
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
      {state.recipe?.length === 0 ? (
        <div className="text-center text-gray-500 col-span-full">No recipes found.</div>
      ) : (
        state.recipe?.map((recipe) => (
          <Recipecard key={recipe.id} recipe={recipe} />
        ))
      )}
    </div>
  </div>
</div>

)
}

export default Searchpage