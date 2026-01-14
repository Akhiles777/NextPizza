import { useEffect } from "react"
import { useRouter } from "next/navigation";
import qs from "qs";
import { Filters } from "./use-filters";


 
 export const useQueryFilters = (filters: Filters) => {
    
    const router = useRouter();
 
    useEffect(() => {
        // This is a placeholder for future logic related to query filters
        const params = {
    ...filters.prices,
  pizzaTypes: Array.from(filters.pizzaTypes),
  sizes: Array.from(filters.sizes),
  ingredients: Array.from(filters.selectedIngredients)
    }



    const query = qs.stringify(params,
      {arrayFormat: 'comma',})
    
    router.push(`?${query}`, {scroll: false} )

    }, [filters, router])
 
 }