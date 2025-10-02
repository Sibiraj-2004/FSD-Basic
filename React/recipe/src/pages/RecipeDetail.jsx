import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getRecipeDetail } from '../services/Api'

function RecipeDetail() {

  const {id}=useParams();
  const [recipe,setRecipe] = useState(null);

  useEffect(()=> {
    const fetchDetail=async () => {
      const data= await getRecipeDetail(id);
      setRecipe(data);
    }
    fetchDetail();
  },[id]);

  if(!recipe){
    return(
      <p>Loading...</p>
    )
  }
   return (
    <div className='p-4 mt-20 flex justify-center'>  
      <div className='container mx-auto'>
        <img src={recipe.image} alt={recipe.title}  className='w-100 h-64 object-cover rounded mb-4' />
        <h1 className='text-2xl font-bold mb-4'>{recipe.title}</h1>
        <p>{recipe.instructions}</p>
      </div>  
    </div>
  )
}

export default RecipeDetail