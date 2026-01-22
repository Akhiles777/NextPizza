import { Product } from "@prisma/client";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";

import React from "react";

interface Props {
    product: Product;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({className}) => {
  return (
    <div className="p-6">
   
    <Dialog>
        <DialogContent className='p-0 w-[1060px] min-h-[500px] bg-white overflow-hidden'>
            <h2 className="font-bold text-lg mb-4">Выберите продукт</h2>
            {/* Здесь можно добавить содержимое модального окна для выбора продукта */}
        </DialogContent>
    </Dialog>
    </div>
  );
};