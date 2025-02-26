import React from 'react'
import introImg from '../assets/introImg.webp';

const Introduction = () => {
    return (
        <div>
            <div className=' flex gap-5 pt-[1vw] pl-[4vw] pr-[4vw] justify-between'>
                <div className='w-[30vw] h-[40vh] bg-[#6d7c3a] rounded-xl ' >
                    <img className='object-cover w-[100%] h-[100%] rounded-xl' src={introImg} alt="" />
                </div>
                <div className='w-[70vw] ml-[5vw] flex justify-center items-center flex-col'>
                    <h1 className='text-[3.4vw] font-medium text-[#212121] mr-[15vw] ml-[2vw]'>INTODUCTION</h1>
                    <p className='text-[1.5vw] text-[#212121] mr-[10vw] ml-[11.5vw]'> We are on a mission to reduce waste by turning discarded materials into beautiful, functional, and artistic products. Our AI-powered platform helps users generate upcycling ideas, making sustainability easy and fun!</p>
                </div>


            </div>
        </div>
    )
}

export default Introduction
