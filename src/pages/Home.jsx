import React from 'react';
import {Spacer} from "@nextui-org/spacer";
import NavigationBar from '../sections/NavigationBar';
import Hero from '../sections/Hero';
import { useTheme } from '../contexts/ThemeProvider';
import Products from '../sections/Products';import Testimonials from '../sections/Testimonials';
import About from '../sections/About';
import Contact from '../sections/Contact';


export default function Home() {
  const {theme} = useTheme();
  return (
  <>
  <div id='home' className={`${theme} bg-background text-foreground  `}>
      <NavigationBar />
      <Hero/>
      <Spacer y={32}/>
      <Products/>
      <Spacer y={32}/>
      <Testimonials/>
      <Spacer y={32}/>
      <About/>
      <Spacer y={32}/>
      <Contact/>
  </div>
  </>
  )
}
