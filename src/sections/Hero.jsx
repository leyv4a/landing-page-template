import { Button } from '@nextui-org/react'
import React from 'react'
import {  useTheme} from '../contexts/ThemeProvider' 
import { FaCheck } from "react-icons/fa6";
export default function Hero() {
  const {theme} = useTheme();
  return (
    <>
    <main className={` w-[95+vw] md:w-[65vw] text-foreground mx-auto flex flex-col gap-2 items-center justify-center mt-12 font-sans`}>
        <h1 className='text-center text-4xl md:text-7xl font-main font-semibold'>Lorem ipsum dols adasds adsadasds adsador sit <em className='text-primary'>amet</em>.</h1>
        <p className='text-center font-main'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint iure voluptatem impedit dolor enim aliquid quam ducimus animi cupiditate facilis.
        </p>
        <div className='w-[100%] flex gap-3 justify-center'>
        <Button className='w-[35%] font-bold bg-primary text-white hover:ring-2 shadow-md rounded'>CTA</Button>
        <Button className={`${theme === 'dark' ? 'bg-slate-300' : 'bg-slate-200' } w-[35%] font-bold shadow-md text-primary hover:ring-2 rounded`}>CTA 2</Button>
        </div>
        <div className='flex gap-6 md:gap-9 flex-wrap'>
         <div className='flex justify-center items-center gap-2'>
         <FaCheck className='text-green-500'/>Ipsum.
         </div>
         <div className='flex justify-center items-center gap-2 '>
         <FaCheck className='text-green-500'/>Lorem.
         </div>
         <div className='flex justify-center items-center gap-2 '>
         <FaCheck className='text-green-500'/>Dolor.
         </div>
         <div className='flex justify-center items-center gap-2'>
         <FaCheck className='text-green-500'/>Sit.
         </div>
        </div>
    </main>
    </>
  )
}
