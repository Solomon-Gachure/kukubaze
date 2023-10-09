import React from 'react'

const Drinks = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
          <h1 className='text-2xl lg:text-3xl font-bold text-orange-500 flex justify-center'>Quench Your Thirst : </h1>
        <div className='grid grid-cols-2 lg:grid-cols-3 pt-2 gap-6 p-2  '>
            
              <div className='relative rounded-xl shadow-lg hover:scale-105 duration-300'>
                  <div className='absolute bg-black/20 h-full w-full rounded-xl flex flex-col justify-center'>
                    <p  className=' font-bold px-2 text-2xl md:text-3xl  '>Get Your </p>
                    <p className='px-2 font-bold text-3xl md:text-4xl'><span className='text-orange-500'>COLD</span> <span className='text-white'>COKE</span></p>
                </div>
                  <img className='max-h-[160px] md:max-h-[400px] w-full h-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1648569883125-d01072540b4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGNvY2ElMjBjb2xhJTIwc29kYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="coke soda" /> 
            </div>
            <div className='relative rounded-xl shadow-lg hover:scale-105 duration-300'>
                  <div className='absolute bg-black/20 h-full w-full rounded-xl flex flex-col justify-center'>
                      <p className=' font-bold px-2 text-2xl md:text-3xl '>Get Your</p>
                      <p className='px-2 font-bold text-3xl md:text-4xl'><span className='text-orange-500'>COLD</span> <span className='text-white'>FANTA</span></p>
                  </div>
                  <img className='max-h-[160px] md:max-h-[400px] w-full h-full object-cover rounded-xl' src="https://thumb.approvedfood.co.uk/thumbs/75/1000/1000/1/src_images/fanta_orange_glass_bottle_330ml.jpg" alt="fanta soda"/>
            </div>
            <div className='relative rounded-xl shadow-lg hover:scale-105 duration-300'>
                  <div className='absolute bg-black/20 h-full w-full rounded-xl flex flex-col justify-center'>
                      <p className=' font-bold px-2 text-2xl md:text-3xl '>Get Your </p>
                      <p className='px-2 font-bold text-3xl md:text-4xl'><span className='text-orange-500'>COLD</span> <span className='text-white'>SPRITE</span></p>
                  </div>
                  <img className='max-h-[160px] md:max-h-[400px] w-full h-full object-cover rounded-xl' src="https://th.bing.com/th/id/OIP.HGpk3MDuKtHU8YQeeD2U1QHaHa?pid=ImgDet&rs=1" alt="sprite soda" />
            </div>
            <div className='relative rounded-xl shadow-lg hover:scale-105 duration-300'>
                  <div className='absolute bg-black/20 h-full w-full rounded-xl flex flex-col justify-center'>
                      <p className=' font-bold px-2 text-2xl md:text-3xl '>Get Your </p>
                      <p className='px-2 font-bold text-3xl md:text-4xl'><span className='text-orange-500'>COLD</span> <span className='text-white'>SMOOTHIE</span></p>
                  </div>
                  <img className='max-h-[160px] md:max-h-[400px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1595981266586-1541a5a4307f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNtb290aGllcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="smoothy"  />
            </div>
            <div className='relative rounded-xl shadow-lg hover:scale-105 duration-300'>
                  <div className='absolute bg-black/20 h-full w-full rounded-xl flex flex-col justify-center'>
                      <p className=' font-bold px-2 text-2xl md:text-3xl '>Get Your </p>
                      <p className='px-2 font-bold text-3xl md:text-4xl'><span className='text-orange-500'>COLD</span> <span className='text-white '>BERRY</span></p>
                  </div>
                  <img className='max-h-[160px] md:max-h-[400px] w-full object-cover rounded-xl' src="https://th.bing.com/th/id/OIP.Db0Li0nHAh5tdAiORxQO2wHaLH?pid=ImgDet&rs=1" alt="strawberry smoothy"  />
            </div>
              <div className='relative rounded-xl shadow-lg hover:scale-105 duration-300 '>
                  <div className='absolute bg-black/20 h-full w-full rounded-xl flex flex-col justify-center'>
                      <p  className=' font-bold px-2 text-2xl md:text-3xl '>Get Your </p>
                      <p className='px-2 font-bold text-3xl md:text-4xl'><span className='text-orange-500'>COLD</span> <span className='text-white'>GREEN</span></p>
                  </div>
                  <img className='max-h-[160px] md:max-h-[400px] w-full h-full object-cover rounded-xl' src="https://i.pinimg.com/736x/ff/79/08/ff790891bfcab080b08bd9b6dec784b1.jpg" alt="greens smoothy"  />
            </div>
        </div>
    </div>
  )
}

export default Drinks