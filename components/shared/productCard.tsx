'use client';

import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";
import { useProductModal } from "@/context/ProductModalContext";

interface Props {
  className?: string;
  name: string;
  price: number;
  id: number;
  imageUrl: string;
  ingredients: string[];
  items: any[];
}

export const ProductCard:React.FC<Props> = ({className,name,price,imageUrl,id, ingredients, items}) => {

  const { openModal } = useProductModal();

  const handleClick = () => {
    console.log('ProductCard clicked, opening modal with:', { id, name, imageUrl });
    openModal(id, { name, imageUrl, ingredients, items, price })
  };

  return (
    <div className={className + " flex flex-col"}>
      <div 
        onClick={handleClick}
        className="cursor-pointer"
      >
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name}/>
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold"/>

        <p>Цыпленок,моцарелла сыры чеддер и пармезан,сырный соус,томаты,соус альфредо,чеснок</p>

        <div className="flex items-center justify-between mt-4">
          <span className="font-bold text-lg text-[20px]">{price} ₽</span>
          <Button className="bg-primary text-white rounded-lg px-4 py-2 font-semibold hover:bg-primary/80 transition-colors">
            <Plus size={20} className="mr-1"/>
            Добавить
          </Button>
        </div>
      </div>
    </div>
  );
};
