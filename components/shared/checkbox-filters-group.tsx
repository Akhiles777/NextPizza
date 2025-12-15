'use client';
import React from "react";

import { Input } from "../ui";
import { FilterChecboxProps } from "./filter-checkbox";
import { FilterCheckbox } from "./filter-checkbox";
import { SrvRecord } from "dns";
import { Plus } from "lucide-react";




type Item = FilterChecboxProps

interface Props{
    className?: string;
    title: string;
    items: Item[];
    defoultItems: Item[];
    limit: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defuoltValues?: string[];

}

export const CheckboxFiltersGroup:React.FC<Props> = ({className,title,items,defoultItems,defuoltValues,limit,onChange,searchInputPlaceholder='Поиск...'}) => {

const [showAll,setShowAll] = React.useState(false);

const list = showAll ? items : defoultItems.slice(0,limit);

const [searchValue, setSearchValue] = React.useState('');



const onChangeSearchInput = (value: string) => {
    setSearchValue(value);
}



  return (
    <div className={className}>

<p className="font-bold mb-3">{title}</p>

{showAll && (
    <div className="mb-5">
<Input onChange={e => onChangeSearchInput(e.target.value)} placeholder={searchInputPlaceholder} className="bg-gray-50 border-none" />
    </div>
)}


<div className="flex flex-col gap-4 mt-7 max-h-96 pr-2 overflow-auto scrollbar">
{list.map((item,index) => (
    <FilterCheckbox  key={index} text={item.text} value={item.value} checked={false} 
    endAdornment={item.endAdornment} 
    onChekedChange={() => console.log('changed')}
    />
))}
</div>

{items.length > limit && (
     <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : '' }>

<button onClick={() => setShowAll(!showAll)} className="text-black mt-3">
    {showAll ? 'Скрыть ' : 'Показать все'} <Plus className={showAll ? 'rotate-45 transition-all inline-block' : 'transition-all inline-block'} size={16} />
</button>

    </div>
    )}


   


    </div>
  );
}
