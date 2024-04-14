import React from 'react'
import {Link} from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className='w-full h-screen overflow-hidden flex flex-col  items-center  mt-[120px]'>
        <h1 className='text-9xl font-extrabold font bold text-slate-400'>404 </h1>
      <h1 className='text-3xl font-bold text-slate-300 mb-5'>Page Not Found</h1>

      <Link to="/addnotes">
        <span className='border p-4 bg-slate-500 text-white rounded-lg mt-5'>Add Note</span>
      </Link>
    </div>
  )
}

export default PageNotFound
