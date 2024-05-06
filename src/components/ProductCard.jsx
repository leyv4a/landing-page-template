import React from 'react'
import {Button} from "@nextui-org/button"
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function ProductCard({image, title, subtitle, button}) {
    React.useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
    

<div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
 <div className='flex flex-col w-[15rem] flex-wrap gap-8 items-center text-center' >
        <div className='text-9xl text-primary'>
            {image}
        </div>
            <p className='text-3xl text-foreground'>
                {title}
            </p>
            <p className='text-2xl text-foreground-200'>
                {subtitle}
            </p>
        <div className='flex '>
        <Button className='rounded w-[13rem]'  variant='ghost' color='primary'>
            {button}
        </Button>
    </div>
    </div>
</div>


   
    </>
  )
}
