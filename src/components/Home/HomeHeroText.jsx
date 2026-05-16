import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='text-white lg:text-[9.5vw] text-[13vw] text-center lg:mt-0 mt-60'>
        <div className='leading-[14vw] lg:leading-[8vw] font-lausanne500 flex justify-center items-center'>THE SPARK FOR</div>
        <div className='leading-[14vw] lg:leading-[8vw] font-lausanne500 flex justify-center items-center'>ALL <div className='headvideo'>
            <Video />
            </div>
            THINGS
        </div>
        <div className='leading-[14vw] lg:leading-[8vw] font-lausanne500 flex justify-center items-center'>CREATIVE</div> 
    </div>
  )
}

export default HomeHeroText