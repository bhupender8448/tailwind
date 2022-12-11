import React from 'react'
import Image from '../assets/fun.jpeg'

function Hero() {
  return (
    <div className='w-full h-[90vh]'>
      <img src={Image} alt="/" className='w-full h-full object-cover'/>
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
            <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
            <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, vero eum enim deserunt ipsum perspiciatis molestiae officia sint suscipit, rem eos beatae commodi possimus voluptate blanditiis soluta? Similique, adipisci ratione?</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
