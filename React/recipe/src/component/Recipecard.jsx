import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeContext } from '../context/RecipeContext';

function Recipecard({ recipe }) {
  const { state, dispatch } = useRecipeContext();

  const isFavorite = state.favorites.some((fav) => fav.id === recipe.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FROM_FAVORITE', payload: recipe.id });
    } else {
      dispatch({ type: 'ADD_TO_FAVORITE', payload: recipe });
    }
  };

  return (
    <div className='border p-4 relative shadow-md rounded-md flex flex-col justify-between h-full'>
      {/* Favorite Emoji in Top-Right */}
      <button
        onClick={toggleFavorite}
        className='absolute top-2 right-2 text-2xl cursor-pointer hover:scale-110 transition-transform'
        title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>

      {/* Card content */}
      <div>
        <img
          src={recipe.image}
          alt={recipe.title}
          className='w-full h-40 object-cover rounded'
        />
        <h2 className='text-lg font-bold mt-2'>{recipe.title}</h2>
      </div>

      {/* View Details at Bottom */}
      <Link
        to={`/recipe/${recipe.id}`}
        className='text-blue-600 underline mt-4'
      >
        View Details
      </Link>
    </div>
  );
}

export default Recipecard;
