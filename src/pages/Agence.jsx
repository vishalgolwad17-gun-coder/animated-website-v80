import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Agence = () => {

  const imagediv = useRef(null);
  const imageref = useRef(null);
  let images=[
    'https://k72.ca/images/teamMembers/Carl_640X960.jpg?w=640&h=960&s=b523e3784fbd5e71c1aa74a917445235',
    'https://k72.ca/images/teamMembers/Isa_640X960.jpg?w=640&h=960&s=5849bb72bb04be156ba2ff4048eb65b8',
    'https://k72.ca/images/teamMembers/Olivier_640X960.jpg?w=640&h=960&s=9b715851e76624b3d00c6715af5c47cd',
    'https://k72.ca/images/teamMembers/joel_640X960_3.jpg?w=640&h=960&s=7fcd2cb26f9ffb7cb96fda9c5e707496',
    'https://k72.ca/images/teamMembers/MEL_640X960.jpg?w=640&h=960&s=02d4500d30e576df52f280714e640a02',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    'https://k72.ca/images/teamMembers/PLP2_640x960.jpg?w=640&h=960&s=277b83adbf80a1c60a1c7ee72dfdf5cf',
    'https://k72.ca/images/teamMembers/ChantalG_640X960.jpg?w=640&h=960&s=0d5256f9a322fa37df33ebc989039be1',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/SebR_640X960.jpg?w=640&h=960&s=81dfdbd4b658503ba32862901a1ea3ca',
  ]

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(imagediv.current,{
      scrollTrigger:{
        trigger: imagediv.current,
        start: "top 21%",
        end: "top -85%",
        pin:true,
        pinSpacing:true,
        pinReparent:true,
        pinType:'transform',
        scrub:1,
        anticipatePin:1,
        invalidateOnRefresh:true,

        onUpdate:(e)=>{
          let imageindex = Math.floor(e.progress * images.length)
          if(imageindex < 1){
              imageref.current.src = images[imageindex]
          }else{
            imageref.current.src = images[imageindex-1]
          }
          
        }
      }
      
    })
    
  })

  return (
    
    <div>
      <div className='section1 p-1'>
        <div ref={imagediv} className='lg:h-[300px] h-[150px] lg:w-[230px] w-[100px] absolute top-[8%] lg:left-[30%] left-[25%] rounded-2xl overflow-hidden'>
        <img ref={imageref} src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
      </div>
      <div className='relative'>
        <h1 className='text-black text-[20vw] text-center font-lausanne500 leading-[17vw] uppercase font-medium lg:mt-90 mt-60'>SEVEN7Y <br /> TWO</h1>
      </div>
      <div className='lg:pl-[40%] pl-[5%] mt-10'>
        <p className='lg:text-5xl text-lg font-lausanne300 lg:font-medium font-bold relative'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
      </div>
      </div>
      <div className='section2 h-[70vh] w-screen flex lg:flex-row flex-col text-xl lg:mt-15 mt-100 gap-10 lg:p-25 p-5 font-medium'>
        <div className=' h-full w-full flex flex-col justify-between lg:gap-0 gap-20'>
          <p>Expertise</p>
          <p>Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.</p>
        </div>
        <div className=' h-full w-full flex flex-col justify-between lg:gap-0 gap-20'>
          <p>statergy <br />advertising <br />Branding <br />Design <br />Content</p>
          <p>Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.</p>
        </div>
        <div className=' h-full w-full flex flex-col justify-end'>
          <p>Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.</p>
        </div>
      </div>
    </div>
  )
}

export default Agence