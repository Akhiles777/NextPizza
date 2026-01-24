

export default function ProductModalLeft({  data }: { data: any }) {
    return (
   
            <div className='flex-1 flex items-center justify-center bg-secondary'>
   <div className='flex items-center justify-center flex-1 relative w-full'>
<img src={data.productData.imageUrl} alt={data.productData.name} className='relative left-2 top-2 transition-all z-10 w-[350px] h-[350px]'/>
   </div>
            </div>

    )
}