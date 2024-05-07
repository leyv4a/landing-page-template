import React from 'react'
import ProductCard from '../components/ProductCard'
import { FaBook , FaCalculator, FaCamera , FaChessRook  } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Products() {
  React.useEffect(() => {
    AOS.init();
  }, [])
  return (
   <>
    <p id='productos' className='invisible '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur dolor laudantium hic aliquid a suscipit! Vero mollitia enim quo magni! Beatae quod, quia doloremque temporibus, modi molestias laudantium eligendi laborum assumenda quidem nihil at et esse fugiat, tempore nulla maxime ad explicabo magni dolorum possimus! Aperiam itaque omnis recusandae? Molestias distinctio libero ea fugit. Officiis ut magni consectetur odio quisquam omnis accusantium nisi possimus recusandae. Ipsum laborum alias impedit quas minus recusandae voluptatum earum minima incidunt delectus hic, maxime, maiores doloribus necessitatibus! Cupiditate, consectetur similique voluptatum perferendis sapiente quod.</p>
   <div className='w-[95vw] md:w-[65vw] mx-auto flex flex-col items-center'>
    <div data-aos="zoom-in-up">
    <h2 className='text-center text-4xl md:text-6xl font-main font-semibold mb-12'>Products</h2>
    </div>
    <div className=" grid grid-cols-1 sm:grid-cols-2 md-grid-cols-2 lg:grid-cols-4 gap-12 ">
        <ProductCard image={<FaBook/>} title={'Product'} subtitle={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quia. Delectus repellendus numquam accusantium.'} button={'Learn More'}/>
        <ProductCard image={<FaCalculator/>} title={'Product'} subtitle={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quia. Delectus repellendus numquam accusantium.'} button={'Learn More'}/>
        <ProductCard image={<FaCamera/>} title={'Product'} subtitle={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quia. Delectus repellendus numquam accusantium.'} button={'Learn More'}/>
        <ProductCard image={<FaChessRook/>} title={'Product'} subtitle={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quia. Delectus repellendus numquam accusantium.'} button={'Learn More'}/>
        
    </div>
   </div>
   </>
  )
}
