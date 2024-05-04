import React from 'react'
import NavigationBar from '../sections/NavigationBar'
import Hero from '../sections/Hero'
import { useTheme } from '../contexts/ThemeProvider'

export default function Home() {
  const {theme} = useTheme();
  return (
  <>
  <div className={`${theme} bg-background text-foreground `}>
      <NavigationBar />
      <Hero/>
  </div>
  </>
  )
}
