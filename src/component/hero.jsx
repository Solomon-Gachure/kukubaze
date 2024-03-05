import React from 'react'
import Navbar from './navbar'

const Hero = () => {
  return (
    <div name='home' className=' font-mono h-full'>
        <div className='relative h-screen '>
        </div>
        <div className='absolute inset-0 bg-cover bg-center' style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/professional-chef-prepares-vegetable-food-frying-pan-with-flame-fire_192985-3003.jpg?w=996)'}} />
<div className='absolute inset-0'>
      <Navbar/>
</div>
    </div>
  )
}

export default Hero