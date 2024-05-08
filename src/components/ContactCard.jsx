import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function ContactCard({type, first, second}) {


    const iconType = {
        phone : <FaPhone/>,
        email : <MdEmail/>,
        address : <FaMapMarkedAlt/>
    }
  return (
    <>
        <div className='w-[30%] h-[8rem] bg-background flex flex-col shadow shadow-foreground-700 justify-center mb-10'>

        <div className='flex justify-center items-center text-2xl h-[2rem] '>
            {iconType[type]}
        </div>
        <div className='flex items-center justify-center flex-col h-[4rem] flex-wrap text-center'>
            <p>
                {first}
            </p>
            <p>
                {second}
            </p>
        </div>
        </div>
    </>
  )
}
