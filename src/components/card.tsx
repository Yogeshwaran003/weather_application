import React from 'react'

const card = () => {
  return (
    <div className='flex flex-col justify-around h-[600px] w-[500px] p-5 bg-black bg-transparent backdrop-blur-[20px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[10px] border border-white/20  '>
      {/* <div>Weather application</div> */}
      <div className='border-2 p-1 border-solid flex justify-between'>
        <p className='text-[25px]'>Date</p>
        <p className='text-[25px]'>Time</p>
      </div>
      <div className='border-2 border-solid flex justify-center text-[100px]'>
        <h1>26C</h1>
      </div>
      <div className='border-2 border-solid flex justify-center text-[50px]'>
        Place
      </div>
      <div className='border-2 border-solid flex justify-center text-[50px]'>
        Some Extra Feature
      </div>
    </div>
  )
}

export default card
