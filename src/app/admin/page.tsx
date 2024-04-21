import Link from "next/link";
import CardComponent from "../components/CardComponent";


export default function AdminMainPage(){
    const array:string[]=['gg','jjj','gg','jjj','gg','jjj','gg','jjj'];
    const imagePath:string='/pexels-pixabay-210019.jpg';
    return(<main>
        <div className="flex justify-between"><h1>Admin Panel</h1>
        <Link href={'/admin/view/history'}>Orders</Link></div>
        <div className="grid grid-cols-5 gap-2">
        {
                array.map((items:string,index:number)=>{
                    return  <CardComponent key={index} imageUrl={imagePath} title="Hey car" description="sdfjkhsdkj"  />
                })
            }
            <div className="border-2 border-secondary  rounded-lg flex gap-12 items-center w-[60%]">
                <Link href={'/admin/new/category'}>Add Category</Link>
            </div>
        </div>
    </main>)
}