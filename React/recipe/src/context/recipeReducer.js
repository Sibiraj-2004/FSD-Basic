const recipeReducer=(state,action) =>{
    switch(action.type){
        case "SET_RECIPE":
            return{
                ...state,
                recipe:action.payload,
            };
         case "ADD_TO_FAVORITE":
            if (state.favorites.find((recipe) => recipe.id === action.payload.id)) {
            return state;
         }
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
             };
         case "REMOVE_FROM_FAVORITE":
            return{
                ...state,
                favorites:state.favorites.filter((recipe)=> recipe.id !== action.payload),
            };
         case "SET_FILTER":
            return{
                ...state,
                filter:action.payload,
            };
        default:
            return state;
    };
}

export default recipeReducer