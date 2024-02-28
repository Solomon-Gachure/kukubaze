import React from 'react'

const Hero = () => {
  return (
    <div name='home' className=' font-mono mx-auto p-4'>
        <div className='relative max-h-[500px]'>
              <div className='absolute max-h-[500px] flex flex-col justify-center text-gray-200 bg-black/40 w-full h-full'>
                  <h1 className='px-4 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>BEST <span className='text-orange-500'>CHICKEN</span></h1>
                  <h1 className='px-4 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>BEST <span className='text-green-500'>PRICES</span></h1>
            </div>
              <img className=' max-h-[500px] w-full object-cover'  src="https://images.unsplash.com/photo-1606728035253-49e8a23146de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWNrZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="chicken meat" />
        </div>
    </div>
  )
}

export default Hero