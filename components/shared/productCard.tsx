import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  className?: string;
  name: string;
  price: number;
  id: number;
  imageUrl: string;

}

export const ProductCard:React.FC<Props> = ({className,name,price,imageUrl,id}) => {
  return (
    <div className={className + " flex flex-col"}>
  <Link href={'/product/1'}>
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

  </Link>
    </div>
  );
};