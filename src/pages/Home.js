import React from 'react'

import Navbar from '../components/Navbar'
import Header from '../layout/Header'
import About from '../layout/about/About'
import RecentProject from '../layout/RecentProject'
import Writing from '../layout/writing/Writing'
import Goals from '../layout/goals/Goals'
import Footer from '../layout/footer/Footer'

import square from '../images/purple-square.png'

export default function Home() {
  return (
    <div>
      <Navbar landing={true} />      
      <Header />
      <img className='h-16 w-auto mv:hidden md:inline absolute left-40' src={square} alt="square icon"/>
      <About />
      <img className='h-16 w-auto mv:hidden md:inline absolute right-40 rotate-45' src={square} alt="square icon"/>
      <RecentProject />
      <Writing />
      <Goals />
      <img className='h-16 w-auto mv:hidden md:inline absolute left-20 rotate-90' src={square} alt="square icon"/>
      <Footer />
    </div>
  )
}
