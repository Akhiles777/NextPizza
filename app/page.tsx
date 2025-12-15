import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { Cat } from "lucide-react";
import { Categories } from "@/components/shared/categories";
import { SortPopup } from "@/components/shared/sort-popup";
import { TopBar } from "@/components/shared/top-bar";
import { Filters } from "@/components/shared/Filters";


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
Список товаров
  </div>
</div>

</div>
</Container>
    </>
  );
}
