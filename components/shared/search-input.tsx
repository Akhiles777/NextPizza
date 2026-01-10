'use client';
import { Search, X } from "lucide-react";
import { useState,useRef} from "react";
import { useClickAway, useDebounce } from "react-use";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";

interface Props{
    classname?: string;
}


export const SearchInput = ({classname}:Props) => {

    const [focused, setFocused] = useState(false);
    const ref = useRef(null)
    const [searchQuery, setSearchQuery] = useState('');
const [products, setProducts] = useState<Product[]>([]);

    useClickAway(ref, () => {
        setFocused(false)
    });

    useDebounce(() => {
       Api.products.search(searchQuery).then(items => {
        setProducts(items);
       })
    }, 150, [searchQuery]);


    const onClickItem = () => {
        setFocused(false);
        setSearchQuery('');
        setProducts([]);
    }
   
  return (
    <>


    {focused &&     <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"/>}

        <div ref={ref} className='flex rounded-2xl flex-1 justify-between relative h-11 z-30'>
      <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5  text-gray-400"/>
      <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}  onFocus={() => setFocused(true)} type="text" 
      className="border border-solid border-gray-200 rounded-2xl outline-none w-full bg-gray-50 pl-11" 
      placeholder="Найти пиццу..."/>

    
 { searchQuery && (
        <button onClick={() => setSearchQuery('')} className="absolute top-1/2 translate-y-[-50%] right-3 h-5 w-5 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300">
        <X className="h-3 w-3 text-gray-600"/>
      </button>
     )}

<div className={cn('absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-300 invisible opacity-0 z-30', focused && 'visible opacity-100 top-12')}>



{products.map((product) => (
    <Link onClick={onClickItem} key={product.id} className="w-full flex items-cent gap-3 px-3 py-2 hover:bg-primary/10" href={`/products/${product.id}`}>
<img className="rounded-sm h-8 w-8" src={product.imageUrl}  alt="Pizza"/>
<span>
{product.name}
</span>

</Link>
))}

</div>
         
    </div>

    </>
  );
};
