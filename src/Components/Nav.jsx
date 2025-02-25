import React from 'react'

const Nav = () => {
  return (
    <div className=' fixed z-[999] w-full px-20 py-3 flex items-center justify-between font-["Neue_Montreal"] gap-10'>
      <div className='logo'>
        <img src="black logo (1).png" alt="" />
      </div>
      <div className='flex gap-10'>
        {["Home", "About Us", "Insight", "Contact Us"].map((item, idx)=>(
          <a key={idx} className={`text-base capitalize ${idx === 4 && "ml-52"}`}>{item}</a>
        ))}
      </div>
    </div>
  )
}

export default Nav