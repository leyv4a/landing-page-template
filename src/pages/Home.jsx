import React from 'react';
import {Spacer} from "@nextui-org/spacer";
import NavigationBar from '../sections/NavigationBar';
import Hero from '../sections/Hero';
import { useTheme } from '../contexts/ThemeProvider';
import Products from '../sections/Products';;

export default function Home() {
  const {theme} = useTheme();
  return (
  <>
  <div  id='home' className={`${theme} bg-background text-foreground  `}>
      <NavigationBar />
      <Hero/>
      <Spacer y={16}/>
      <Products/>
  </div>
  </>
  )
}
