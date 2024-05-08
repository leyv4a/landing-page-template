import { Card } from '@nextui-org/react'
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function HistoryCard() {
    React.useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
    <div className='flex md:flex-row flex-col-reverse gap-8 flex-warp justify-between w-full'>
        <Card data-aos="fade-up" className='w-full md:w-[35rem] h-[20rem] bg-primary'/>
        <div data-aos="fade-up" className='w-full md:max-w-[40%] text-center md:text-right'>
            <p className='text-3xl mb-8'>
                Our History
            </p>
            <span className='text-foreground-200 text-center'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis recusandae ad illo asperiores animi, quidem distinctio similique eos esse saepe accusantium iure soluta maiores, tempora debitis, eligendi culpa perferendis quo error ipsa! Fuga laborum deleniti blanditiis nihil? Libero, maxime voluptates.
            </span>
        </div>
    </div>
    </>
)
}
