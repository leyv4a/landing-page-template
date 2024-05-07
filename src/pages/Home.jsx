import React from 'react';
import {Spacer} from "@nextui-org/spacer";
import NavigationBar from '../sections/NavigationBar';
import Hero from '../sections/Hero';
import { useTheme } from '../contexts/ThemeProvider';
import Products from '../sections/Products';import Testimonials from '../sections/Testimonials';
;

export default function Home() {
  const {theme} = useTheme();
  return (
  <>
  <div  id='home' className={`${theme} bg-background text-foreground  `}>
      <NavigationBar />
      <Hero/>
      <Spacer y={32}/>
      <Products/>
      <Spacer y={32}/>
      <Testimonials/>
  </div>
  </>
  )
}
