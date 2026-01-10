'use client';
import React from "react";

import { Input, Skeleton } from "../ui";
import { FilterChecboxProps } from "./filter-checkbox";
import { FilterCheckbox } from "./filter-checkbox";
import { Plus } from "lucide-react";


type Item = FilterChecboxProps

interface Props{
    className?: string;
    title: string;
    items: Item[];
    defoultItems: Item[];
    limit: number;
    loading?: boolean
    selectedIds?: Set<string>
    searchInputPlaceholder?: string;
    onClickCheckbox?: (id: string) => void;
    defuoltValues?: string[];

}

export const CheckboxFiltersGroup:React.FC<Props> = ({className,title,items,defoultItems,defuoltValues,limit,loading, selectedIds, onClickCheckbox,searchInputPlaceholder='Поиск...'}) => {

const [showAll,setShowAll] = React.useState(false);


const [searchValue, setSearchValue] = React.useState('');



const onChangeSearchInput = (value: string) => {
    setSearchValue(value);
}

if(loading){
    return <div className={className}>
        <p className="font-bold mb-3">{title }</p>
        {   ...Array(limit).fill(0).map((_,index) => (
                <Skeleton key={index} className="h-6 mb-4 rounded-[8px]"/>
            ))
        }
    </div>
}

const list = showAll ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())) : defoultItems.slice(0,limit);



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
    <FilterCheckbox  key={index} text={item.text} value={item.value} checked={selectedIds?.has(item.value)} 
    endAdornment={item.endAdornment} 
    onChekedChange={() => onClickCheckbox?.(item.value)}
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
