import React from 'react'
import { motion } from "motion/react"

const Marquee = () => {
    
  return (
    <div  className='marquee w-full py-10 rounded-tl-xl rounded-tr-xl text-[#ffff] bg-[#2F8250]'>
        <div className='text border-t-2 border-b-2 border-[#5baaa0] flex whitespace-nowrap  overflow-hidden'>
            <motion.h1 initial={{x: '0'}} animate={{x: "-100%"}} transition={{repeat: Infinity ,ease: "linear", duration: 15}} className='text-[20vw] font-medium leading-none uppercase font-["Founders_Grotesk_X_Condensed"] pb-[2.5vw] pt-[2vw] -mb-[8vw] pr-6 '>TRANSFORM WASTE INTO WONDORS ART</motion.h1>
            <motion.h1 initial={{x: '0'}} animate={{x: "-100%"}} transition={{repeat: Infinity ,ease: "linear", duration: 15}} className='text-[20vw] font-medium leading-none uppercase font-["Founders_Grotesk_X_Condensed"] pb-[2.5vw] pt-[2vw] -mb-[8vw] '>TRANSFORM WASTE INTO WONDORS ART</motion.h1>

            
            
        </div>
    </div>
  )
}

export default Marquee
