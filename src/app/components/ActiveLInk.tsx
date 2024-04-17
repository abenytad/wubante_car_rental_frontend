'use client'
import { usePathname } from "next/navigation";
import Link from "next/link"
export default function ActiveLink({href,children}:{href:string,children:React.ReactNode}){
    const pathName=usePathname();
    const isActive:boolean=pathName===href;
    return(<Link href={href} className={isActive? 'active flex items-center gap-2':'flex items-center gap-2'}>
       {children}
    </Link>)
}