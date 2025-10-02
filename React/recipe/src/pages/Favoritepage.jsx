import React from 'react'
import { useRecipeContext } from '../context/RecipeContext'
import Recipecard from '../component/Recipecard';

function Favoritepage() {

  const {state}=useRecipeContext();

  if(state.favorites.length === 0){
    return(
     <div className="flex items-center justify-center h-screen">
  <p className=" text-3xl text-center  text-gray-600">No Favorite Recipe Added Yet</p>
</div>
    )
  }
  return(
    <div className='p-4 mt-20'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 '>
          {state.favorites?.map((recipe) =>(
            <Recipecard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Favoritepage