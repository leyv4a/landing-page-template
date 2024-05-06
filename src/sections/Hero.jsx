import { Button, Card } from '@nextui-org/react'
import React from 'react'
import {  useTheme} from '../contexts/ThemeProvider' 
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion"
export default function Hero() {
  const {theme} = useTheme();


  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <>
    <main className={` w-[95vw] md:w-[65vw] text-foreground mx-auto flex flex-col gap-6 items-center  justify-start font-sans mt-3 md:mt-28`}>

        {/* HEADER */}
        <motion.h1 className='text-center text-4xl md:text-7xl font-main font-semibold'
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          Lorem ipsum dols adasds adsadasds adsador sit <em className='text-primary'>amet</em>.
        </motion.h1>
        {/* SUBHEADER */}
        <motion.p className='text-center font-main text-foreground-200'
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 5}}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint iure voluptatem impedit dolor enim aliquid quam ducimus animi cupiditate facilis.
        </motion.p>

         {/* CTA BUTTONS */}
        <div className='w-[100%] flex gap-3 justify-center '>
         <motion.button className='w-[35%] font-bold bg-primary text-white hover:ring-2 shadow-md rounded py-2'
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            CTA
          </motion.button>

          <motion.button className={`${theme === 'dark' ? 'bg-slate-300' : 'bg-slate-200'} w-[35%] font-bold shadow-md text-primary hover:ring-2 rounded`}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            CTA 2
          </motion.button>
        </div>

        {/* CHECKS */}
        <motion.div className='flex gap-6 md:gap-9 flex-wrap'
         initial="hidden"
         animate="visible"
         variants={variants}
        >
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
        </motion.div>
        <Card className='w-full h-[60vh] bg-primary'>
        </Card>
    </main>
    </>
  )
}

