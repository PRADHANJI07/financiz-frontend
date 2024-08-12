import React from 'react';
import double from '../components/Assets/double.png';
import single from '../components/Assets/single.png';
import triple from '../components/Assets/triple.png';

function Cards() {
  return (
    <div className='w-full py-[10rem] px-8 bg-white'>
      <div className='max-w-[1240px] mx-auto  md:grid grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB of storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 text-black'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-20 rounded-lg hover:scale-105 duration-300 bg-gray-100'>
          <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={double} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB of storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className='text-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 bg-black'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB of storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 text-black'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
