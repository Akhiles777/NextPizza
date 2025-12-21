import Image from "next/image";
import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";
import { Filters } from "@/components/shared/Filters";
import { ProductGroupList } from "@/components/shared/product-group-list";


export default function Home() {


  return (
    <>
<Container className="mt-10">
        <Title size='lg' className="font-extrabold" text='Все пиццы' />
</Container>

<TopBar/>
<Container className="mt-10 pb-14">
<div className="flex gap-[60px]">
<div className="w-[250px]">
<Filters/>
</div>

{/* Список товаров */}

<div className="flex-1">
  <div className="flex flex-col gap-16">


<ProductGroupList title="Пиццы" items={[
  {id:1,name:'Пепперони фреш с перцем',imageUrl:'https://media.dodostatic.net/image/r:292x292/0198bf55aa0a735e8b20fcc260745346.avif',items:[{price: 540}]},
  {id:2,name:'Чизбургер-пицца',imageUrl:'https://media.dodostatic.net/image/r:292x292/019a10a0c9ab792190a97768688bc6e9.avif',items:[{price: 580}]},
  {id:3,name:'Сырная',imageUrl:'https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif',items:[{price: 430}]},
  {id:4,name:'Пепперони фреш с перцем',imageUrl:'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',items:[{price: 540}]},
  {id:5,name:'Чизбургер-пицца',imageUrl:'https://media.dodostatic.net/image/r:292x292/0198bf4ff4787930ac027022d0db6ec2.avif',items:[{price: 580}]},
  {id:6,name:'Сырная',imageUrl:'https://media.dodostatic.net/image/r:292x292/0198bf3e424371b49f0b8d7dbe320a70.avif',items:[{price: 430}]
  }
]} categoryId={1}
/>


<ProductGroupList title="Завтрак" items={[
  {id:1,name:'Пепперони фреш с перцем',imageUrl:'https://media.dodostatic.net/image/r:292x292/0198bf55aa0a735e8b20fcc260745346.avif',items:[{price: 540}]},
  {id:2,name:'Чизбургер-пицца',imageUrl:'https://media.dodostatic.net/image/r:292x292/019a10a0c9ab792190a97768688bc6e9.avif',items:[{price: 580}]},
  {id:3,name:'Сырная',imageUrl:'https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif',items:[{price: 430}]},
  {id:4,name:'Пепперони фреш с перцем',imageUrl:'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',items:[{price: 540}]},
  {id:5,name:'Чизбургер-пицца',imageUrl:'https://media.dodostatic.net/image/r:292x292/0198bf4ff4787930ac027022d0db6ec2.avif',items:[{price: 580}]},
  {id:6,name:'Сырная',imageUrl:'https://media.dodostatic.net/image/r:292x292/0198bf3e424371b49f0b8d7dbe320a70.avif',items:[{price: 430}]
  }
]} categoryId={2}
/>



  </div>
</div>

</div>
</Container>
    </>
  );
}
