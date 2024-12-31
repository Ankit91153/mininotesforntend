import React, { useState } from 'react'
import { useSelector ,useDispatch} from "react-redux";
import { addNote } from '../services/operations/auth';
import { useNavigate } from "react-router-dom";



const AddPost = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const { signupData } = useSelector((state) => state.auth);
    const [data,setData]=useState({
        title:"",
        description:""
    })

    const changeHandler=(e)=>{
        setData((prev)=>({
            ...prev,[e.target.name]:e.target.value
        }))
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        const userId=signupData._id;
        const {title,description}=data
        // Add your form submission logic here
        dispatch(addNote({title,description,userId},navigate))

        setData({
            title:"",
            description:""
        })
        
    }
  return (
    <div className='w-full'>
        <div className='mx-auto md:w-[50%] w-[80%] bg-slate-400 border rounded-md mt-4 py-2 shadow-lg shadow-slate-500/50'>
            <form onSubmit={submitHandler}>
                <h1 className='font-bold text-3xl text-center text-white my-3'>Add Notes</h1>
                <div className='flex flex-col gap-4'>
                    <input type="text" name='title' placeholder='Enter then Title of Note' className='w-[80%] p-3 border mx-auto' value={data.title} onChange={changeHandler} required/>
                    <textarea name="description" cols="30" rows="10" placeholder='Enter your description' className='w-[80%] border mx-auto p-3'value={data.description} onChange={changeHandler} required>

                    </textarea>
                    <button className='mx-auto border p-3 bg-slate-600 text-white p-3 rounded-md hover:scale-105 transition duration-300 ease-in-out' type='submit'>Add Note</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddPost
