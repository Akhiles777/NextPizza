'use client';
import { cn } from "@/shared/utils";
import { useCategoryStore } from "@/story/category";
import { Category } from "@prisma/client";



interface CategoriesProps{
  items: Category[];
    className?: string;
}



const avtiveIndex = 0;

export const Categories:React.FC<CategoriesProps> = ({items, className}) => {

const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>

{items.map(({name,id},index) => (
    <a key={index} className={cn("flex items-center font-bold h-11 rounded-2xl px-5", categoryActiveId=== index + 1 && 'bg-white shadow-md shadow-gray-200 text-orange-500')} href={`#${name}`}  >

    <button>
      {name}
    </button>

    </a>
))}

    </div>
  );
}