'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import React from 'react';
import { useProductModal } from '@/context/ProductModalContext';
import { ProductImage } from '../ProductImage';
import { ProductModalRight } from './ProductModalRight';

interface Props {
  className?: string;
}

export const ProductModalContent: React.FC<Props> = ({ className }) => {

  const { modal, closeModal } = useProductModal();

  

  return (
    <Dialog open={modal.isOpen} onOpenChange={closeModal}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}
      >
        {modal.productData && (
          <div className='flex'>
            {/* Left - Image */}
            <div className='flex-1 flex items-center justify-center bg-secondary'>
   <div className='flex items-center justify-center flex-1 relative w-full'>
<img src={modal.productData.imageUrl} alt={modal.productData.name} className='relative left-2 top-2 transition-all z-10 w-[350px] h-[350px]'/>
   </div>
            </div>

            {/* Right - Info */}
            <ProductModalRight data={modal.productData} />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
