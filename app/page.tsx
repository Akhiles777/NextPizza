import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";
import { Filters } from "@/components/shared/filters";
import { ProductGroupList } from "@/components/shared/product-group-list";
import { prisma } from "@/prisma/prisma-client";


export default async function Home() {

const categories = await prisma.category.findMany({
  include: {
    products: {
      include:{
        ingredients:true,
        items:true 
      }
    }
  }
});

  return (

    <>
<Container className="mt-10">
        <Title size='lg' className="font-extrabold" text='Все пиццы' />
</Container>

<TopBar categories={categories.filter((category) => category.products.length > 0)}/>
  
<Container className="mt-10 pb-14">
<div className="flex gap-[60px]">
<div className="w-[250px]">
<Filters/>
</div>

{/* Список товаров */}

<div className="flex-1">
  <div className="flex flex-col gap-16">

{categories.map((category) => (
  category.products.length > 0 && (
    <ProductGroupList
      key={category.id}
      title={category.name}
      products={category.products}
      categoryId={category.id}
      items={category.products}
    />
  )
))}   



  </div>
</div>

</div>
</Container>
    </>
  );
}
