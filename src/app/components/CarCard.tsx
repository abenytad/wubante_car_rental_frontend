'use client';
import Image from "next/image";
import Link from "next/link";
export default function CarCard({imageUrl,carName,model,available,pricePerDay}:{imageUrl:string,carName:string,model:string,available:number,pricePerDay:number}){
    const admin=true;
  return (
    <div className="border-2 border-secondary  rounded-lg flex gap-12 items-center w-[60%]">
        <Image src={imageUrl} alt="a car image" height={100} width={100} quality={100} />
        <div>
            <div className="carCard">
                <span>Car Name</span>
                <span>{carName}</span>
            </div>
            <div className="carCard">
                <span>Model</span>
                <span>{model}</span>
            </div>
            <div className="carCard">
                <span>Available Cars</span>
                <span>{(available===0)?"All cars rented":available}</span>
            </div>
            <div className="carCard">
                <span>Price</span>
                <span>{pricePerDay}</span>
            </div>
            {
                !admin &&  <Link className='bg-secondary' href={'/rent'}>Rent</Link>
            }
           {
            admin && <div className="flex gap-3">
                <button>increase</button>
                <button>decrease</button>
                <Link href={'/admin/edit/car'}>Edit</Link>
                <button>delete</button>
            </div>
           }
        </div>
    </div>
  )
}