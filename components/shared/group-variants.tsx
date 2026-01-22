'use client';

import { cn } from "@/shared/utils";

interface Props {
    items: readonly Variant[];
defaultValue?: string;
onClick?: (value: Variant['value']) => void;
    classname?: string;
    selectedValue?: Variant['value'];
}

type Variant = {
    name: string;
    value: string;
    disabled?: boolean;
}


export const GroupVariants:React.FC<Props> = ({classname, items, onClick, selectedValue}) => {  
    return (
      <div className={cn('flex justify-between bg-[#F3F3F7] rounded-3xl p-1 select-none',classname)}>

{items.map((item) => (
    <button key={item.name} onClick={() => onClick?.(item.value)}
    
    className={cn('flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-300',
{'bg-white shadow-md font-semibold': item.value === selectedValue,
'text-gray-500 opacity-50 pointer-events-none': item.disabled}

    )}
    >
        

{item.name}


    </button>
))}
      </div>
    );
}