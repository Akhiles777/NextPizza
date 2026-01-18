import { Container } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { ProductImage } from "@/components/shared/ProductImage";
import { Title } from "@/components/shared/title";

 
 export default async function ProductPage({params: {productId}}: {params: {productId: string}}) { 

 
const product = await prisma.product.findMany({where: {id: Number(productId)}})


if (!product) {
  return notFound();
}


    return (
    <Container className="flex flex-col my-10">
<div className="flex flex-1">
     <ProductImage size={40} classname="" imageUrl={product.imageUrl} /> 

 <div className="w-[490px] bg-[#FCFCFC]">

<Title text={product.name} size='md' className="font-extrabold mb-1" />

<p className="text-gray-400">Lorem</p>

 </div>
</div>

    </Container>
    );
}
