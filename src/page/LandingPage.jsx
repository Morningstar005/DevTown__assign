import React from 'react'
import {Navbar,Footer, ProductBox} from "../components"
const LandingPage = () => {
  return (
    <div className='max-w-10xl mx-auto'>
      <Navbar/>
      <ProductBox/>
      <Footer/>
    </div>
  )
}

export default LandingPage