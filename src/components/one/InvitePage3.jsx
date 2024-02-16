import React,{useState} from 'react'
import { Button, Modal } from 'antd';

const InvitePage3 = () => {
  return (
    <>



    <div className='flex justify-center items-center'>
    <div className='flex flex-col items-center  bg-gray-300 w-[45vw]'>
        <div className=' py-14 pt-6 '>
            <h2 className='text-center font-semibold text-2xl mb-10'>Create profile and invite</h2>
            <p className='text-center text-md font-medium mb-8'>when do you want james harper to receive an invitation to join </p>

            <div className='flex justify-between font-normal text-md mb-7'>
                <p className=' text-gray-400'>Employee Name</p>
                <p>James harper</p>
            </div>
            <div className='flex justify-between font-normal text-md mb-7'>
                <p className=' text-gray-400'>Designation</p>
                <p>UI/UX Designer</p>
            </div>
            <div className='flex justify-between font-normal text-md mb-7'>
                <p className=' text-gray-400'>Email Address</p>
                <p>Jamesharper@synectiks.com</p>
            </div>
            <div className='flex justify-between font-normal text-md mb-7 '>
                <p className=' text-gray-400'>Invitation</p>
                <p>Immediately</p>
            </div>

        </div>
        <button className='bg-[#1890FF] w-[50%] mb-5 h-9'>confirm and continue</button>
            <p className='mb-5 cursor-pointer'>Back</p>
    </div>
    </div>
    </>
  )
}

export default InvitePage3