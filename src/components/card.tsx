import React from 'react'

const card = (props:{place:string;temp:number}) => {
  const now=Date.now();
  return (
    <div className='flex flex-col justify-around h-[600px] w-[500px] p-5 bg-black bg-transparent backdrop-blur-[20px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[10px] border border-white/20  '>
      {/* <div>Weather application</div> */}
      <div className='p-1 flex justify-between'>
        <p className='text-[25px]'>{new Date(now).toLocaleDateString()}</p>
        <p className='text-[25px]'>{new Date(now).toLocaleTimeString()}</p>
      </div>
      <div className='flex justify-center text-[100px]'>
        <h1>{props.temp==0?0:Math.round(props.temp-273.15)}°C</h1>
      </div>
      <div className='flex justify-center text-[50px]'>
        {props.place}
      </div>
      {/* <div className='flex justify-center text-[50px]'>
        Some Extra Feature
      </div> */}
    </div>
  )
}

export default card
