import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap' 
import { Link} from 'react-router-dom'
import { Navcontext } from '../context/Navcontext'
import { useContext } from 'react'

const FullscreenNav = () => {

  const {nav,setnav} = useContext(Navcontext)

    let seevrythingdiv = useRef()
    let seevrythingdiv2 = useRef()
    let seevrythingdiv3 = useRef()
    let seevrythingdiv4 = useRef()
    let pageref = useRef()
    let pageref2 = useRef()
    let pageref3 = useRef()
    let pageref4 = useRef()
    let pageref5 = useRef()
    let fullpage = useRef()

    let staircontainer = useRef()

    useGSAP(()=>{

      let tl = gsap.timeline();

      tl.to(staircontainer.current,{
        display:'block'
      })

      .from(".stairs",{
        height:'100%',
        duration:0.3,
        stagger:{
          amount:-0.25
        }
      })

      .to(".stairs",{
        y:'100%',
        duration:0.3,
        stagger:{
          amount:-0.25
        }
      })

      .to(staircontainer.current,{
        display:'none'
      })

      .to('.stairs',{
        y:'-100%',
      })

  },[nav])

  useGSAP(()=>{

      gsap.from(pageref.current,{
        opacity:0,
        duration:1,
        delay:1,
      })

      gsap.from(pageref2.current,{
        opacity:0,
        y:'-40%',
        rotateX:90,
        duration:0.8,
        delay:1.1,
      })

      gsap.from(pageref3.current,{
        opacity:0,
        duration:0.8,
        rotateX:90,
        delay:1.2,
      })

      gsap.from(pageref4.current,{
        opacity:0,
        duration:0.8,
        rotateX:90,
        delay:1.3,
      })
      
      gsap.from(pageref5.current,{
        opacity:0,
        duration:0.8,
        rotateX:90,
        delay:1.4,
      })

      gsap.to(fullpage.current,{
        opacity:1,
        backgroundColor:'black',
        duration:1,
        delay:1
      })

  },)

      useGSAP(()=>{

        gsap.to(seevrythingdiv.current,{
            xPercent:-62,
            duration:15,
            repeat:-1,
            ease:"none",
        })

        gsap.to(seevrythingdiv2.current,{
             xPercent:-62,
            duration:15,
            repeat:-1,
            ease:"none",
        
        })

        gsap.to(seevrythingdiv3.current,{
             xPercent:-62,
            duration:15,
            repeat:-1,
            ease:"none",
        
        })

        gsap.to(seevrythingdiv4.current,{
             xPercent:-62,
            duration:15,
            repeat:-1,
            ease:"none",
        
        })
      })

  return (
    <div ref={fullpage} className='bg-white h-screen w-screen absolute z-50 overflow-hidden text-black '>

    <div ref={staircontainer} className='h-screen w-full fixed top-0 left-0 z-20 pointer-events-none'>
      <div className='h-screen w-full flex'>
        <div className='stairs h-full w-1/5 bg-black'></div>
        <div className='stairs h-full w-1/5 bg-black'></div>
        <div className='stairs h-full w-1/5 bg-black'></div>
        <div className='stairs h-full w-1/5 bg-black'></div>
        <div className='stairs h-full w-1/5 bg-black'></div>
      </div>
    </div>


      {/* navbar */}

      <div ref={pageref} className='flex justify-between w-full absolute '>
        <div>
          <Link to="/" className='lg:text-7xl text-6xl text-white'>V80</Link>
        </div>
        <div onClick={()=>{

  gsap.to(".menu",{
    opacity:0,
    duration:0.3,
    onComplete:()=>{
      setnav(false)
    }
  })

}}className='lg:h-[160px] lg:w-[155px] w-[80px] h-[110px] rounded-2xl relative flex items-center justify-center mr-4 hover:bg-lime-300 transition-all duration-500'>

  <div className='absolute h-1 lg:w-45 w-35 bg-white rotate-45 '></div>

  <div className='absolute h-1 lg:w-45 w-35 bg-white -rotate-45 '></div>

</div>
      </div>

  {/* first section */}
  <div ref={pageref2} className='border-y border-white flex flex-col lg:mt-40 mt-45'>

    <div className='lg:text-9xl text-7xl font-medium uppercase flex items-center justify-center bg-black text-white'>
      work
    </div>

    <div
      ref={seevrythingdiv}
      onMouseEnter={()=>{gsap.to(seevrythingdiv.current,{opacity:1})}}
      onMouseLeave={()=>{gsap.to(seevrythingdiv.current,{opacity:0})}}
      className='flex flex-nowrap overflow-x-auto gap-10 scrollbar-none bg-lime-300 absolute opacity-0 text-black'
    >

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

    </div>

  </div>

  {/* second section */}
  <div ref={pageref3} className='border-b border-white flex flex-col'>

    <div className='lg:text-9xl text-7xl font-medium uppercase flex items-center justify-center bg-black text-white'>
      agency
    </div>

    <div
      ref={seevrythingdiv2}
      onMouseEnter={()=>{gsap.to(seevrythingdiv2.current,{opacity:1})}}
      onMouseLeave={()=>{gsap.to(seevrythingdiv2.current,{opacity:0})}}
      className='flex flex-nowrap overflow-x-auto gap-10 scrollbar-none bg-lime-300 absolute opacity-0 text-black'
    >

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

    </div>

  </div>

  {/* third section */}
   <div ref={pageref4} className='border-b border-white flex flex-col bg-black text-white'>

    <div className='lg:text-9xl text-7xl font-medium uppercase flex items-center justify-center'>
      contacts
    </div>

    <div
      ref={seevrythingdiv3}
      onMouseEnter={()=>{gsap.to(seevrythingdiv3.current,{opacity:1})}}
      onMouseLeave={()=>{gsap.to(seevrythingdiv3.current,{opacity:0})}}
      className='flex flex-nowrap overflow-x-auto gap-10 scrollbar-none bg-lime-300 absolute opacity-0 text-black'
    >

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

    <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

    </div>

  </div>

   {/* fourth section */}
   <div ref={pageref5} className='border-b border-white flex flex-col'>

    <div className='lg:text-9xl text-7xl font-medium uppercase flex items-center justify-center bg-black text-white'>
      blog
    </div>

    <div
      ref={seevrythingdiv4}
      onMouseEnter={()=>{gsap.to(seevrythingdiv4.current,{opacity:1,})}}
      onMouseLeave={()=>{gsap.to(seevrythingdiv4.current,{opacity:0,})}}
      className='flex flex-nowrap overflow-x-auto gap-10 scrollbar-none bg-lime-300 absolute opacity-0 text-black'
    >

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />

      <div className='lg:text-9xl text-7xl font-medium uppercase whitespace-nowrap'>
        see everything
      </div>

      <img
        className='lg:h-[7vw] h-[20vw] lg:w-[20vw] w-[40vw] rounded-full'
        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
        alt=""
      />


    </div>

  </div>

  </div>

  )
}

export default FullscreenNav