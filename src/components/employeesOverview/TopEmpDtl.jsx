import React from 'react'
import Image from "next/image"
import empImg from "@/../../public/assets/employeesOverview.svg"
import bag from "@/../../public/assets/OfficeBag.svg"
import { CiMail } from "react-icons/ci";
import { AiFillEdit } from "react-icons/ai";

const TopEmpDtl = () => {
  return (
    <div className='bg-gray-300  h-full flex justify-between items-center p-3 m-3'>
        <div className='flex gap-6'>
            <Image  src={empImg} alt="Employee Overview"/>
            <div>
                <h2 className='font-semibold text-lg'>Darlene Robertson</h2>
                <p className='flex items-center gap-3'><Image src={bag} alt='Office Bag' /> <span>UI/UX Designer</span></p>
                <p className='flex items-center gap-3'><CiMail className='w-5 h-5 font-semibold'/> <span>Darlene@synectiks.com</span></p>
            </div>

        </div>
        
        <button className='flex items-center gap-2 bg-[#1890FF] text-white font-light py-2 px-4 rounded-sm '> <AiFillEdit />Edit Profile</button>
    </div>
  )
}

export default TopEmpDtl