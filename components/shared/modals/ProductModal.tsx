'use client';

import { useProductModal } from '@/context/ProductModalContext';
import { ProductImage } from '../ProductImage';
import { Title } from '../title';
import { ProductModalRigth } from './Product-modal-rigth';

export function ProductModal() {

  const { modal, closeModal } = useProductModal();

  console.log('ProductModal render:', modal);

  if (!modal.isOpen || !modal.productData) {
    return null;
  }



  return (
    <>
      {/* Backdrop */}
      <div
        className='fixed inset-0  z-40 bg-black/80'
        onClick={closeModal}
      />

   <div className='fixed    inset-0 z-50 flex  flex-1 items-center justify-center pointer-events-none'>
        <div 
          className='bg-white rounded-2xl pointer-events-auto flex shadow-lg w-max'
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left - Image */}
          <div className='flex-1'>
            <ProductImage size={40} classname="" imageUrl={modal.productData?.imageUrl} />
          </div>


         {/* Right - Info */}
         <ProductModalRigth modal={modal} closeModal={closeModal} />

        </div>
      
      </div>
    </>
  );
}

