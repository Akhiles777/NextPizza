import {cn} from '@/lib/utils';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { ArrowRight, Search, User } from 'lucide-react';
import { ShoppingCart} from 'lucide-react';
import { Input } from '../ui';



interface Props{
    classname?: string;
}


export const Header = ({classname}:Props) => {

  return (
    <header className={cn('border border-b', classname)}>
      
 <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}

          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
            </div>
          </div>



          {/* Правая часть */}

          <div className='flex items-center gap-3'>
            <Button className='flex items-center gap-1' variant='outline'>
<User size={16} />
Войти
            </Button>

            <div>
<Button className='group relative'>
<b>520 р</b>
<span className='h-full w-[1px] bg-white/30 mx-3'/>
<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
  <ShoppingCart className='w-4 h-4 relative' strokeWidth={2}/>
  <b>3</b>
</div>
<ArrowRight className='w-5 absolute right-5 transition duration-300  -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100' />
</Button> 
            </div>
          </div>
</Container>
    </header>
  );
}