'use client';
import Image from "next/image";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react'; 
export default function RentPage(){
    const {register,handleSubmit,formState:{errors},}=useForm();
    const [startDate, setStartDate] = useState(new Date());
    const  onSubmit=(data:any)=>{

    }
    return(
        <main className="flex flex-col gap-3">
            <div className="border-2 border-secondary  rounded-lg flex gap-12 items-center w-[60%]">
                <Image src={'/pexels-pixabay-210019.jpg'} alt="any image" height={100} width={100} quality={100} />
                <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-5">
                    <span>Car Name</span>
                    <span>model</span>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <span>Car Name</span>
                    <span>model</span>
                </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <label htmlFor="liscence">Driving Licence</label>
            <input type="text" id="licence"  {...register('licence',{required:true,})} />
            {errors.license && errors.license.type==='required' && (<span className="text-red-500">license is required</span>)}
          </div> 
          <div>
          <label>Date:</label>
      <DatePicker
        {...register('date', { required: true })}
        selected={startDate}
        onChange={(date:any) => setStartDate(date)}
      />
      {errors.date && <span>This field is required</span>}
          </div> 
          <div>
            <label htmlFor="daynumber">Enter the number of days</label>
            <input type="number" id="daynumber"  {...register('dayNumber',{required:true,})} />
            {errors.dayNumber && errors.dayNumber.type==='required' && (<span className="text-red-500">total number of day is required</span>)}
          </div>  
          <button type="submit">Rent</button> 
            </form>
        </main>
    )
}