import React, { useState } from 'react'
import { FaFacebook, FaTiktok,FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Contact = () => {
  const WhatsAppLink = ()=>{
    const number='+254798605270'
    const message="welcome to kuku jamboo!"
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  }
  const [name,setName]=useState('')
  const [email, setEmail]=useState('')
  const [message, setMessage]=useState('')
  const disabled =()=>{
    return !name || !email || !message
  }
  return (
      <div name='contact' className='max-w-[1640px] font-mono m-auto py-4 px-4 '>
        <div className='flex justify-center p-2' >
              <h1 className='md:text-xl font-bold text-orange-500' >Get in Touch with us and give us your Feedback on our services:</h1>
        </div>
       <div className='lg:max-w-[800px] border rounded-md  bg-orange-500/60 mx-auto p-4 grid lg:grid-cols-2 gap-2' >
        {/**social media links */}
<div>
<h1 className='font-extrabold text-lg text-white'>You can reach us through our social media handles:</h1>
<div className='flex justify-center items-center gap-16 p-4 text-whit'>
  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} className='cursor-pointer font-extrabold hover:scale-110 duration-300 hover:text-orange-500' /></a>
<a href="https://www.tiktok.com/login" target="_blank" rel="noopener noreferrer"><FaTiktok size={30} className='cursor-pointer font-extrabold hover:scale-110 duration-300 hover:text-orange-500' /></a>
<a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer"><FaXTwitter size={30} className='cursor-pointer font-extrabold hover:scale-110 duration-300 hover:text-orange-500' /></a>
<FaWhatsapp size={30} onClick={WhatsAppLink} target='_blank' className='cursor-pointer font-extrabold hover:scale-110 duration-300 hover:text-orange-500' />
</div>
<p className='text-center font-semibold text-lg text-white'>Or <br/> fry us a message:</p>
</div>
                <form className='flex flex-col justify-center gap-3'  action="https://getform.io/f/db96c5fb-9063-4883-a850-e833759e93be" method="POST">
                  <input required className=' p-3 outline-none text-orange-500  rounded-lg outline-gray-100 ' name='name'  type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />
                  <input required className='p-3 outline-none  text-black  rounded-lg outline-gray-100' name='email' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Your Email' />
                  <textarea required className='p-2 outline-none rounded-lg text-black outline-gray-100' name="message" value={message} onChange={(e) => setMessage(e.target.value)} id="" cols="30" rows="5" placeholder='Enter Your Message'></textarea>
                  <div className='max-w-[500px] flex justify-center'>
                      <button
                      type='submit' className={disabled() ? 'bg-gray-200 outline-none border-none text-gray-400': 'text-white bg-green-500 hover:scale-105 duration-300 p-3 rounded-lg border-green-500 font-bold cursor-pointer'}
                      >SUBMIT</button>
                  </div>
              </form>
       </div>
    </div>
  )
}

export default Contact