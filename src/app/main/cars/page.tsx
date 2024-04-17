import CardComponent from "@/app/components/CardComponent";

export default function CarsPage(){
    const imagePath:string='/pexels-pixabay-210019.jpg';
    const array:string[]=['gg','jjj','gg','jjj','gg','jjj','gg','jjj',]
    return (<main className="w-full flex flex-col gap-3">
        <h1>Cars</h1>
        <div className="grid grid-cols-5 gap-2">
            {
                array.map((items:string,index:number)=>{
                    return  <CardComponent key={index} imageUrl={imagePath} title="Hey car" description="sdfjkhsdkj" />
                })
            }
       
        </div>

    </main>)
}