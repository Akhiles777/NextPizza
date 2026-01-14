import { useEffect, useState } from "react";
import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";


type IngredientItems = Pick<Ingredient, 'id' | 'name'>;



export const useIngredients = () => {
   

const [ingredients, setIngredients] = useState<IngredientItems[]>([]) 

    const [loading, setLoading] = useState(true)

    useEffect(() => {
   async function fetchIngredients() {
try{
    const ingredients = await Api.ingredients.getAll();
  setIngredients(ingredients.map((ingredient) => ({id:ingredient.id, name: ingredient.name})))
}
catch (error) {
    console.error('Error fetching ingredients:', error);
}finally{
    setLoading(false)
}
    }

    fetchIngredients();
}, []);

return {ingredients, loading}
}