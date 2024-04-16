'use client'
import { usePathname } from "next/navigation";
import Link from "next/link"
export default function ActiveLink({href,children}:{href:string,children:React.ReactNode}){
    const pathName=usePathname();
    const isActive:boolean=pathName===href;
    return(<Link href={href} className={isActive? 'active':''}>
       {children}
    </Link>)
}