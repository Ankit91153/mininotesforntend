import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import {  signUp } from "../services/operations/auth"
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const dispatch=useDispatch()
    const navigate = useNavigate();

    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: ""
    });
   

      const handleOnChange=(e)=>{
        setData((prev)=>({
            ...prev,[e.target.name]:e.target.value,
        }))
        
      }

      const submitHandler=(e)=>{
        e.preventDefault();
        const validationErrors = {};
        if (!data.name.trim()) {
            validationErrors.name = "Name is required";
        }
        if (!data.email.trim()) {
            validationErrors.email = "Email is required";
        }
        if (!data.password.trim()) {
            validationErrors.password = "Password is required";
        }
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            const {name,email,password}=data
            // Add your form submission logic here
            dispatch(signUp({name,email,password},navigate))

        }
      }
  return (
    <div className='w-11/12'>
      <div className='w-[50%] mx-auto border mt-5 bg-slate-500 px-5 rounded-3xl'>
            <form className='flex flex-col gap-3' onSubmit={submitHandler}>
                <h1 className='font-bold text-3xl text-center text-white mt-3'>Sign up</h1>
                <div>
                    <input type="text" placeholder='Enter your name' name='name' className='w-[100%] p-2 border' value={data.name} onChange={handleOnChange}/>
                    {errors.name && <span className="text-red-500">{errors.name}</span>}
                </div>
                <div>
                    <input type="email" placeholder='Enter your Email' name='email' className='w-[100%] p-2 border' value={data.email} onChange={handleOnChange}/>
                    {errors.email && <span className="text-red-500">{errors.email}</span>}

                </div>
                <div>
                    <input type="password" placeholder='Enter your Password' name='password' className='w-[100%] p-2 border' value={data.password} onChange={handleOnChange}/>
                    {errors.password && <span className="text-red-500">{errors.password}</span>}

                </div>

                <div className='my-4'>
                    <button className='mx-auto block border bg-slate-600 text-white p-3 rounded-md hover:scale-105 transition duration-300 ease-in-out'>Sign Up</button>
                </div>
            </form>
      </div>
    </div>
  )
}

export default Signup
