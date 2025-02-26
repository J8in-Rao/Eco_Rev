import React from 'react'
import Button from './Button'
import bo1 from '../assets/bo1.jpg';

const AiSection = () => {

  return (
    <div>
      <div className="text flex justify-center items-center flex-col pt-20">
        <h1 className='text-[4vw] font-["Neue_Montreal"] uppercase font-semibold leading-[3.5vw] tracking-wider '>Advancing Creativity With</h1>
        <h1 className='text-[4vw] font-["Neue_Montreal"] uppercase font-semibold leading-[3.5vw] tracking-wider '>Artificial  Intelligency</h1>
        <h3 className='text-[1vw] font-["Neue_Montreal"] capitalize font-md tracking-wider underline pt-3 '>Transform Waste into Wonder with AI-Powered Creativity!</h3>
      </div>
      
      <div className=' flex gap-5 pt-[1vw] pl-[4vw] pr-[4vw] justify-between'>
               
                <div className=' w-[70vw]'>
                    <p className='text-[1.5vw] text-[#212121] mr-[15vw] ml-[2vw]'> Our intelligent assistant provides step-by-step guides tailored to your materials, helping you craft unique and beautiful pieces. Whether it's Upcycling old furniture, Repurposing plastic bottles, or creating wall art, our AI ensures that nothing goes to waste. Get inspired and start making today!</p>
                    <div className='ml-[2vw] mt-[2vw]'>
                    <Button />

                    </div>
                </div>

                <div className='w-[30vw] h-[40vh] bg-[#6d7c3a] rounded-xl'>
                    <img className='object-cover w-[100%] h-[100%] rounded-xl' src={bo1} alt="" />
                </div>

            </div>

    </div>
  )
}

export default AiSection
