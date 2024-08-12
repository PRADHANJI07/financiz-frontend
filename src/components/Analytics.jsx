import React from 'react'
import laptop from '../components/Assets/laptop.jpg'
function Analytics() {
  return (
    <div className='w-full bg-white py-12 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={laptop} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-primaryColor  font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Manage Data Analytics Centrally</h1>
          <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At necessitatibus eaque ab nostrum quod repudiandae libero porro aperiam consequuntur! A incidunt expedita omnis maxime dolor dignissimos libero distinctio ullam quam?</p>
          <button className='text-primaryColor bg-black w-[200px] rounded-md my-6 mx-auto md:mx-0 py-3 '>Get started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
