'use client';
import { useRef } from "react";
import React from "react";
import { Title } from "./title";
import { ProductCard } from "./productCard";

import { cn } from "@/shared/utils";
import {useIntersection} from 'react-use';
import { useCategoryStore } from "@/story/category";
import Link from "next/link";



interface Props{
   title: string;
   items: any[];
   className?: string;
   listClassName?: string;
   categoryId: number;
}

export const ProductGroupList:React.FC<Props> = ({title,items,className='',listClassName='',categoryId}) => {

const intersectionRef = React.useRef(null);

const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

const intersection = useIntersection(intersectionRef, {
    threshold: 0.4
    });


React.useEffect(() => {
  if(intersection?.isIntersecting){
    setActiveCategoryId(categoryId);
  }
}, [intersection, categoryId]);

    return (
        <div className={className} id={title} ref={intersectionRef}>
    
    <Title text={title} size="lg" className="mb-6 font-bold"/>
 <div className={cn('grid grid-cols-3 gap-[50px]',listClassName)}>
{items.map((item,index) => (
    <ProductCard
    key={index}
    id={item.id}
    name={item.name}
    price={item.items[0].price}
    imageUrl={item.imageUrl}
    />
))}
 </div>
        </div>
    );
};
