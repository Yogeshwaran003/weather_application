import React from 'react'

const card = () => {
  return (
    <div className='h-[600px] w-[500px] p-10 bg-black bg-transparent backdrop-blur-[20px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[10px] border border-white/20  '>
      <div className='flex justify-between'>
        <p>Date</p>
        <p>Time</p>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default card
