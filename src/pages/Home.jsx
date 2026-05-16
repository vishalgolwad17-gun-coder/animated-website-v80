import React from 'react'
import Video from '../components/Home/Video'
import HomeHeroText from '../components/Home/HomeHeroText'
import HomeBottomText from '../components/Home/HomeBottomText'

const Home = () => {
  return (
    <div > 
    <div className='h-screen w-screen bg-red-900 fixed'>
    <Video />
    </div>
    <div className='absolute h-full w-full flex justify-between flex-col'>
    <HomeHeroText />
    <HomeBottomText/>
    </div>
    </div>
  )
}

export default Home