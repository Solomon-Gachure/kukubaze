import React from 'react'

const Contact = () => {
  return (
      <div name='contact' className='max-w-[1640px] font-mono m-auto py-2 px-4 '>
        <div className='flex justify-center p-2' >
              <h1 className='md:text-xl font-bold text-orange-500' >Get in Touch with us and give us your Feedback on our services:</h1>
        </div>
       <div className='max-w-[500px] mx-auto p-2' >
              <form className='flex flex-col justify-center gap-3' action="https://getform.io/f/db96c5fb-9063-4883-a850-e833759e93be" method="post">
                  <input required className='bg-gray-100 p-2 rounded-lg outline-gray-100' name='name' type="text" placeholder='Enter Your Name' />
                  <input required className='bg-gray-100 p-2 rounded-lg outline-gray-100' name='email' type="text" placeholder='Enter Your Email' />
                  <textarea required className='bg-gray-100 p-2 rounded-lg outline-gray-100' name="message" id="" cols="30" rows="5" placeholder='Enter Your Message'></textarea>
                  <div className='max-w-[500px] flex justify-center'>
                      <button className='text-white bg-green-500 hover:scale-105 duration-300 border-green-500 font-bold'>SUBMIT</button>
                  </div>

              </form>
       </div>
    </div>
  )
}

export default Contact