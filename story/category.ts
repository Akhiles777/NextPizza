import {create} from 'zustand';

interface Props {
    activeId: number;
    setActiveId: (activeId: number) => void;
}


export const useCategoryStore = create<Props>((set) => ({
    activeId: 1,
    setActiveId: (activeId: number) => set({activeId}),
}));