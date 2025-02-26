import React from 'react'
import backgroundImg from '../assets/background.jpg';
const Home = () => {
  
  return (
    <div  className='flex relative items-center justify-center h-full w-full '>
      <img src={backgroundImg} alt="background image" className="    " />
      <div className='h-[16vw] w-[32vw] font-["Neue_Montreal"] absolute mb-[13vw] mr-[5vw] '>
          <div className="heading flex justify-center items-center flex-col text-center mt-1.5">
              <h1 className='uppercase text-black text-[2vw] font-semibold '>Transforming waste</h1>
              <h1 className='uppercase text-black text-[2vw] font-semibold '>into wondors</h1>

          </div>
          <div className='flex justify-between items-center p-[4vw]'>
            <button className='h-[4vw] w-[10vw] rounded-2xl bg-[#5D7752] flex items-center justify-center font-semibold text-white uppercase text-[1.2vw]'>Buy</button>
            <button className='h-[4vw] w-[10vw] rounded-2xl bg-[#5D7752] flex items-center justify-center font-semibold text-white uppercase text-[1.2vw]'>Sell</button>

          </div>
      </div>
    </div>
    
  )
}

export default Home
