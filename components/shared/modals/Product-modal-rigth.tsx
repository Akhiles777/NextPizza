import { useProductModal } from "@/context/ProductModalContext";
import { Title } from "../title";

import React from "react";
import { Button } from "@/components/ui";

interface ModalState {
  isOpen: boolean;
  productId: number | null;
  productData: {
    name: string;
    imageUrl: string;
    ingredients: any[];
    items: any[];
    price: number;
  } | null;
}

interface Props {
  modal: ModalState;
  className?: string;
  closeModal: () => void;
}


export const ProductModalRigth: React.FC<Props> = ({ modal, closeModal }) => {

  const textDetails = '30 см, традиционное тесто'

  return (
    <div className="p-6">
   
   {/* Right - Info */}
          <div className='w-122.5 rounded-2xl  bg-[#f7f6f5] p-7 flex flex-col relative'>
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-50'
            >
              ✕
            </button>

            <Title text={modal.productData?.name || 'Товар'} size="md" className="font-extrabold mb-1" />

            <p className='text-gray-400'>{textDetails}</p>

            <Button className="h-[55px] mt-5 px-10 text-base rounded-[18px] w-full">
              Добавить в корзину - {modal.productData?.price} ₽
            </Button>
          </div>
        </div>
  
  );
};