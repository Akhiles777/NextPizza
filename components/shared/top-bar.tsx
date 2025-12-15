import { cn } from '@/lib/utils';

import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { Container } from './container';


interface Props{
    classmame?: string;
}

export const TopBar = ({classmame}:Props) => {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', classmame)}>


<Container className="flex items-center justify-between gap-3">
  
<Categories/>
<SortPopup/>
</Container>
 

    </div>
  );
}