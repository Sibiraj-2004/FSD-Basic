const BASE_URL = "https://api.spoonacular.com/recipes";
const API_KEY="eb0b5b35ff57419f8c725f20e775fcab";

export const getrecipe=async (query) =>{
    const response=await fetch(`${BASE_URL}/complexSearch?query=${query}&apiKey=${API_KEY}`);
    return response.json();
}

export const getRecipeDetail = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}/information?apiKey=${API_KEY}`);
  return response.json();
}

