'use client'
import { Title } from "./title";
import { Input} from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useQueryFilters, useFilters,useIngredients } from "@/hooks";



interface Props{
    className?: string;
}

interface PriceProps{
  priceFrom?: number
  priceTo?: number
}


interface QueryFilters extends PriceProps {
pizzaTypes: string;
sizes: string;
ingredients: string;
}

export const Filters:React.FC<Props> = ({className}) => {

  const filters = useFilters()

const {ingredients, loading} = useIngredients()


useQueryFilters(filters) 

const items = ingredients.map((items) => ({value: String(items.id), text: items.name}))

const updatePrices = (prices: number[]) => {
  filters.setPrices('priceFrom', prices[0])
  filters.setPrices('priceTo', prices[1])
}


  return (
    <div className={className}>
   <Title text="Фильтрация" size='sm' className="mb-5 font-bold"/>

  <CheckboxFiltersGroup
title="Тип теста"
items={[
  {text:'Тонкое',value:'1'},
  {text:'Традиционное',value:'2'},
]}
selected={filters.pizzaTypes}
name="pizzaTypes"
className="mb-5"
onClickCheckbox={filters.setPizzaTypes}
/>  



  <CheckboxFiltersGroup
title="Размеры"
items={[
  {text:'20 см',value:'20'},
  {text:'30 см',value:'30'},
  {text:'40 см',value:'40'},
]}
selected={filters.sizes}
name="sizes"
className="mb-5"
onClickCheckbox={filters.setSizes}
/>  


   <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
<p className="font-bold mb-3">Цена от и до:</p>
<div className="flex gap-3 mb-5">
  <Input type="number" placeholder="0" min={0} max={1000} value={String(filters.prices.priceFrom || '0')} onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}/>
  <Input type="number"  placeholder="1000" min={100} max={1000} value={String(filters.prices.priceTo || '1000')} onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}/>
</div>

<RangeSlider min={0} max={1000} step={10} value={[
  filters.prices.priceFrom || 0,
  filters.prices.priceTo || 1000
]}
onValueChange={updatePrices}
/>
   </div>


<CheckboxFiltersGroup
title="Популярные ингредиенты"
items={items}
name="ingredients"
className="mt-3"
limit={6}
defoultItems={items.slice(0,6)}
loading={loading}
onClickCheckbox={filters.setSelectedIngredients}
selectedIds={filters.selectedIngredients}
/>  

    </div>
  );
}