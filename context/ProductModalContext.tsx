'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ProductModalProviderProps {
  children: ReactNode;
}

interface ModalState {
  isOpen: boolean;
  productId: number | null;
  productData: any | null;
}

interface ModalContextType {
  modal: ModalState;
  openModal: (id: number, data: any) => void;
  closeModal: () => void;
}

const ProductModalContext = createContext<ModalContextType | undefined>(undefined);

export function ProductModalProvider({ children }: ProductModalProviderProps) {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    productId: null,
    productData: null,
  });

  const openModal = (id: number, data: any) => {
    setModal({
      isOpen: true,
      productId: id,
      productData: data,
    });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      productId: null,
      productData: null,
    });
  };

  return (
    <ProductModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ProductModalContext.Provider>
  );
}

export function useProductModal() {
    
  const context = useContext(ProductModalContext);

  if (context === undefined) {
    throw new Error('useProductModal must be used within ProductModalProvider');
  }
  return context;
}

