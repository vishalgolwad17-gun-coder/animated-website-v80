import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex justify-center gap-3 items-center lg:mb-0 mb-7'>
      <p className='absolute text-white lg:text-end text-start lg:w-[32vw] w-[76vw] right-0 lg:bottom-41 bottom-25 lg:text-lg text-xs lg:pr-12 pr-4 lg:leading-relaxed leading-normal font-medium'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>
        <Link to="/projects" className='text-white lg:text-[6vw] text-[8vw] text-center lg:font-medium font-bold font-lausanne300 leading-[6vw] uppercase border-2 border-white rounded-full lg:px-10 px-4 lg:py-0 py-1 hover:border-lime-300 hover:text-lime-300'>Projects</Link>
        <Link to="/agence" className='text-white lg:text-[6vw] text-[8vw] text-center lg:font-medium font-bold font-lausanne300 leading-[6vw] uppercase border-2 border-white rounded-full lg:px-10 px-4 lg:py-0 py-1 hover:border-lime-300 hover:text-lime-300'>Agence</Link>
    </div>
  )
}

export default HomeBottomText