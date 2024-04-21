import Link from "next/link";
import CarCard from "@/app/components/CarCard";
export default function AdminCarPage(){
    const array:string[]=['gg','jjj','gg','jjj','gg','jjj','gg','jjj'];
    const imagePath:string='/pexels-pixabay-210019.jpg';
    return(<main>
        <div className="flex justify-between">
            <h1>category name</h1>
            <Link href={'/admin/new/car'}>add car</Link>
        </div>
        {
         array.map((items:string,index:number)=>{
                    return   <CarCard  imageUrl={imagePath} carName="aaaa" model="jkhfuhsgdf" available={0} pricePerDay={100} />
                })
            }
    </main>)
}