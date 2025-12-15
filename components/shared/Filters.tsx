import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input, Slider } from "../ui";
import { RangeSlider } from "./range-slider";
import { Check } from "lucide-react";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props{
    className?: string;
}

export const Filters:React.FC<Props> = ({className}) => {
  return (
    <div className={className}>
   <Title text="Фильтрация" size='sm' className="mb-5 font-bold"/>


   <div className="flex flex-col gap-4">
<FilterCheckbox text='Можно собирать' value='1'/>
<FilterCheckbox text='Новинки' value='2'/>
   </div>


   <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
<p className="font-bold mb-3">Цена от и до:</p>
<div className="flex gap-3 mb-5">
  <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0}/>
  <Input type="number"  placeholder="1000" min={100} max={1000}/>
</div>

<RangeSlider min={0} max={5000} step={10} value={[0,5000]}/>
   </div>


<CheckboxFiltersGroup
title="Популярные ингредиенты"
items={[
  {text:'Грибы',value:'1'},
  {text:'Ветчина',value:'2'},
  {text:'Ананас',value:'3'},
  {text:'Сыр',value:'4'},
  {text:'Томаты',value:'5'},
  {text:'Лук',value:'6'},
  {text:'Перец',value:'7'},
  {text:'Огурцы',value:'8'},
]}
className="mt-3"
limit={6}
defoultItems={[
{text:'Грибы',value:'1'},
  {text:'Ветчина',value:'2'},
  {text:'Ананас',value:'3'},
  {text:'Сыр',value:'4'},
  {text:'Томаты',value:'5'},
  {text:'Лук',value:'6'},
  {text:'Перец',value:'7'},
  {text:'Огурцы',value:'8'},
  {text:'Маслины',value:'9'},
  {text:'Кукуруза',value:'10'},
]}
/>  

    </div>
  );
}