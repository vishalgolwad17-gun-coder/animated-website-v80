import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLocation } from 'react-router-dom'
import { Navcontext } from '../context/Navcontext'
import { useContext } from 'react'


const Stairs = ({children}) => {

const {nav,setnav} = useContext(Navcontext)

 let currentlocation = useLocation().pathname;
    
  let staircontainer = useRef()

  let pageref = useRef()
  
  useGSAP(()=>{
    let tl = gsap.timeline();

    tl.to(staircontainer.current,{
      display:'block'
    })

    tl.from(".stairs",{
      height:0,
      duration:0.3,
      stagger:{
        amount:-0.25
      }
  })

  tl.to(".stairs",{
    y:'100%',
    duration:0.3,
    stagger:{
      amount:-0.25
    }
  })

  tl.to(staircontainer.current,{
    display:'none'
  })

  tl.to('.stairs',{
    y:'0%',
  })
  
  gsap.from(pageref.current,{
    opacity:0,
    delay:1,
  })

},[currentlocation,nav])


  return (
    <div>
    <div ref={staircontainer} className='h-screen w-full fixed top-0 left-0 z-20 pointer-events-none'>
      <div className='h-screen w-full flex'>
        <div className='stairs h-full w-1/5 bg-black'></div>
        <div className='stairs h-full w-1/5 bg-black'></div>
        <div className='stairs h-full w-1/5 bg-black'></div>
        <div className='stairs h-full w-1/5 bg-black'></div>
        <div className='stairs h-full w-1/5 bg-black'></div>
      </div>
    </div>
    <div ref={pageref}>
      {children}
    </div>
    </div>
  )

}

export default Stairs