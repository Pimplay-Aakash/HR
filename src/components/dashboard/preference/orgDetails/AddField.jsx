import React from 'react'
import { IoSave } from "react-icons/io5";


const AddField = () => {
  return (
    <div className='p-10 '>
        <div className='flex items-center justify-between w-full py-4 '>
            <h2 className='font-semibold text-2xl'>Add Field</h2>
            <span className='flex gap-14 items-center'>
                <p className='cursor-pointer'>cancel</p>
                <button className='flex items-center gap-2 text-white px-6 py-2 bg-[#1890FF] '><IoSave />Save</button>   
            </span>
            
        </div>
        <div className='flex font-medium text-base flex-col bg-white p-6 mb-5'>
            <div className='mb-6'>
                <label htmlFor='file' >New File :</label>
                <input type="text" placeholder='Designation' id='file' className='p-2 w-[30%] outline-[#1890FF] ml-20 border border-gray-300 rounded-sm'/>
            </div>
            <div>
                <label htmlFor='file' >New File :</label>
                <select type="text" placeholder='Select' id='file' className='p-2 w-[30%] outline-[#1890FF] ml-20 border border-gray-300 rounded-sm'>
                    <option value="" disabled selected className='text-gray-300'>Select</option>
                    <option value="first">first</option>
                    <option value="second">second</option>
                </select>
            </div>
        </div>

        <h3 className='font-medium text-base mb-5'>Add steps</h3>

        <div className='flex flex-col bg-white p-6'>
            <div className='mb-8 flex items-center justify-between w-full ' >
                <span className='flex items-center w-full'>
                    <label htmlFor='file' >Step 1 :</label>
                    <input type="text" placeholder='1' id='file' className='p-2 w-[30%] outline-[#1890FF] ml-20 border border-gray-300 rounded-sm'/>
                </span>
                
                <button className='flex items-center gap-2 text-white px-6 bg-[#1890FF] w-[250px] '><IoSave />Add New Step</button>
            </div>
            <div>
                <label htmlFor='file' >Step 2 :</label>
                <input type="text" placeholder='2' id='file' className='p-2 w-[30%] outline-[#1890FF] ml-20 border border-gray-300 rounded-sm'/>
            </div>
        </div>
    </div>
  )
}

export default AddField