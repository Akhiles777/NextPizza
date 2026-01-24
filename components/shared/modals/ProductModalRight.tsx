'use client';

import React from 'react';
import { Button } from '@/components/ui';
import { Title } from '../title';
import { DialogTitle } from '@/components/ui/dialog';

interface ProductData {
  name: string;
  imageUrl: string;
  ingredients: any[];
  items: any[];
  price: number;
}

interface Props {
  data: ProductData;
}

export const ProductModalRight: React.FC<Props> = ({ data }) => {

  const textDetails = '30 см, традиционное тесто';

  return (
    <div className=' p-8 bg-[#edebea]'>
      <div className='w-[450px] '>
        <DialogTitle className="font-extrabold mb-1" style={{fontSize: 30, fontWeight: '900'}}>

{data.name}
        </DialogTitle>

        <p className='text-sm mt-2 text-gray-400'>{textDetails}</p>
      </div>

      {/* Button */}
      <Button className='h-14 px-10 mt-3 text-base rounded-[18px] w-full'>
        Добавить в корзину — {data.price} ₽
      </Button>

    </div>
  );
};
