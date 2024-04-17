'use client';
import Link from "next/link";
import { useForm } from "react-hook-form"

export default function SignUpForm(){
    const {register,handleSubmit,formState:{errors},watch}=useForm();
    const password=watch('password','');
    const  onSubmit=(data:any)=>{

    }
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Sign Up</h2>
          <div>
            <label htmlFor="username">Full Name</label>
            <input type="text" id="username"  {...register('userName',{required:true,maxLength:12})} />
            {errors.userName && errors.userName.type==='required' && (<span className="text-red-500">user full name is required</span>)}
            {errors.userName && errors.userName.type==='maxLength' && (<span className="text-red-500"> exceeds the maximum character length</span>)}
          </div>
          <div>
            <label htmlFor="phonenumber">Phone Number</label>
            <input type="number" id="phonenumber" placeholder="09********"  {...register('phoneNumber',{required:true,minLength:10,maxLength:10})} />
            {errors.userName && errors.userName.type==='required' && (<span className="text-red-500">phone number is required</span>)}
            {errors.phoneNumber && (errors.phoneNumber.type==='maxLength' || errors.phoneNumber.type==='minLength')  && (<span className="text-red-500">the phone number must be a 10 digit number</span>)}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"  {...register('password',{required:true,minLength:6})} />
            {errors.password && errors.password.type==='required' && (<span className="text-red-500">the password  is required</span>)}
            {errors.password && errors.password.type==='minLength' && (<span className="text-red-500">the password must be at least 6 characters</span>)}
          </div>
          <div>
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input type="password" id="confirmpassword"  {...register('confirmPassword',{ 
          validate: (value) => value === password || "The passwords do not match" 
        })} />
            {errors.confirmPassword && (
    <span className="text-red-500">
     the password is not the same
    </span>
  )}
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div>
        <Link className='text-secondary' href={'/sign-in'}>Already have an account?</Link>
      </div>
      </>
    )
}