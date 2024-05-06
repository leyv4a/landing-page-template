import React from 'react'
import ProductCard from '../components/ProductCard'
import { FaBook , FaCalculator, FaCamera , FaChessRook  } from "react-icons/fa";

export default function Products() {

  return (
   <>
    <h2 id='productos' className='text-center text-4xl md:text-6xl font-main font-semibold mb-28'>Products</h2>
    <div className="flex flex-wrap gap-16 justify-center">
        <ProductCard image={<FaBook/>} title={'Product'} subtitle={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quia. Delectus repellendus numquam accusantium.'} button={'Learn More'}/>
        <ProductCard image={<FaCalculator/>} title={'Product'} subtitle={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quia. Delectus repellendus numquam accusantium.'} button={'Learn More'}/>
        <ProductCard image={<FaCamera/>} title={'Product'} subtitle={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quia. Delectus repellendus numquam accusantium.'} button={'Learn More'}/>
        <ProductCard image={<FaChessRook/>} title={'Product'} subtitle={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quia. Delectus repellendus numquam accusantium.'} button={'Learn More'}/>
        
    </div>
  
   </>
  )
}
