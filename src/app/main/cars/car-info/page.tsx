import CarCard from "@/app/components/CarCard";
export default function CarInfoPage(){
    const imagePath:string='/pexels-pixabay-210019.jpg';
    
    return(
        <main className="w-full flex flex-col items-center gap-3">
              <h1>Car Information</h1>
                <CarCard  imageUrl={imagePath} carName="aaaa" model="jkhfuhsgdf" available={0} pricePerDay={100} />
        </main>
    )
}