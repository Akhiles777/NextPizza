import { Container } from '@/components/shared/container';
import { Title } from '@/components/shared/title';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import { ProductImage } from '@/components/shared/ProductImage';
import { GroupVariants } from '@/components/shared/group-variants';

export default async function ProductModalPage() {
 

  return (
    <Container className="flex flex-col my-10">
    <h1>Hello</h1>
    </Container>
  );
}