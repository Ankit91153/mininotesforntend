import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import {  login } from "../services/operations/auth"
import { useNavigate } from "react-router-dom";


const Login = () => {
    const dispatch=useDispatch()
    const navigate = useNavigate();

    const [data,setData]=useState({
        email:"",
        password:""
    });

    const [errors, setErrors] = useState({
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
       
        if (!data.email.trim()) {
            validationErrors.email = "Email is required";
        }
        if (!data.password.trim()) {
            validationErrors.password = "Password is required";
        }
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            const {email,password}=data
            // Add your form submission logic here
            dispatch(login({email,password},navigate))

        }
      }
  return (
    <div className='w-11/12'>
      <div className='w-[50%] mx-auto border mt-5 bg-slate-500 px-5 rounded-3xl'>
            <form className='flex flex-col gap-3' onSubmit={submitHandler}>
                <h1 className='font-bold text-3xl text-center text-white mt-3'>Login</h1>
                <div>
                    <input type="email" placeholder='Enter your Email' name='email' className='w-[100%] p-2 border' value={data.email} onChange={handleOnChange}/>
                    {errors.email && <span className="text-red-500">{errors.email}</span>}

                </div>
                <div>
                    <input type="password" placeholder='Enter your Password' name='password' className='w-[100%] p-2 border' value={data.password} onChange={handleOnChange}/>
                    {errors.password && <span className="text-red-500">{errors.password}</span>}

                </div>

                <div className='my-4'>
                    <button className='mx-auto block border bg-slate-600 text-white p-3 rounded-md hover:scale-105 transition duration-300 ease-in-out'>Login</button>
                </div>
            </form>
      </div>
    </div>
  )
}

export default Login
