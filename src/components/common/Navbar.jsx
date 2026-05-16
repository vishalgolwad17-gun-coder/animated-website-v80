import { useGSAP } from '@gsap/react'
import React, { useContext, useRef,useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import {Navcontext} from '../context/Navcontext'
import FullscreenNav from './FullscreenNav'


const Navbar = ({children}) => {

    let currentlocation = useLocation().pathname;
    let greendiv =  useRef()
    let lines = useRef()
    let lines2 = useRef()
    let logo = useRef()

   const {nav,setnav} = useContext(Navcontext)

    useGSAP(()=>{
      gsap.to(logo.current,{
       color: currentlocation === '/'? 'white':'black'
      })
    },[currentlocation])

  return (
    <div>
        <nav className=' fixed z-50 w-full flex justify-between lg:gap-0 gap-15'>
            <div className='flex items-center gap-2 px-4'>
                <Link id='logo'ref={logo} className='lg:text-7xl text-6xl text-white font-medium'  to="/">V80</Link>
            </div>

        <div className='h-13 w-65 flex'>
        
            <div onMouseEnter={()=>{
                greendiv.current.style.height = '100%'
                lines.current.style.backgroundColor = 'black'
                lines2.current.style.backgroundColor = 'black'
            }}
            onMouseLeave={()=>{
                greendiv.current.style.height = '0%'
                lines.current.style.backgroundColor = 'white'
                lines2.current.style.backgroundColor = 'white'
            
            }} 
            onClick={()=>{
              setnav(true)
            }} 
            className='relative overflow-hidden bg-black lg:h-15 h-10 w-full flex flex-col items-end justify-center pr-8 gap-1'>
                
                 <div
                    ref={greendiv}
                    className='absolute top-0 left-0 w-full h-0 bg-lime-300 transition-all'
                ></div>
                <div ref={lines2} className="relative h-[2px] w-15 bg-white z-10"></div>
                <div ref={lines} className="relative h-[2px] w-8 bg-white z-10"></div>
                </div>
            </div>
      </nav>

      {nav === true ? <FullscreenNav /> : children}
      
    </div>
  )
}

export default Navbar