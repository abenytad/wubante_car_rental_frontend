'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaInfoCircle } from 'react-icons/fa';
export default function CardComponent({imageUrl,title,description}:{imageUrl:string,title:string,description:string}){
    const router=useRouter();
    const admin=true;
    const linkHandler=()=>{
        router.refresh();
        admin?router.push('/admin/cars'):router.push('/main/cars');
    }
    return (
        
        <div className="border-2 border-secondary  rounded-lg flex flex-col items-center" onClick={linkHandler}>
   <Image src={imageUrl} width={100} height={100} alt='image' quality={100} />
   <h2>{title}</h2>
   <h3 className="flex gap-3"><FaInfoCircle /> {description}</h3>
   {
    admin && <div className="flex gap-3">
    <Link href={'/admin/edit/category'}>edit</Link>
    <button>Delete</button>
   </div>
   }
        </div>
    )
}