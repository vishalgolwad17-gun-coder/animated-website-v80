
import ProjectsList from '../components/projects/ProjectsList'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  const images = [
    {
      image1:'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b',
      image2:'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14'
    },
    {
      image1:'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
      image2:'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757'
    },
    {
      image1:'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
      image2:'https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821'
    }
  ]

  useGSAP(()=>{

    gsap.utils.toArray('.lol').forEach((item)=>{

      gsap.from(item,{

        scaleY:0,
        transformOrigin:"top",
        scrollTrigger:{
          trigger:item,
          start:'top 90%',
          end:'top 10%',
          scrub:1,
          duration:2
        }

      })

    })

  })

  return (

    <div className='w-full overflow-hidden'>

      {/* heading */}

      <div className='pt-[80vw] lg:pt-[15vw] px-3 lg:px-5'>

        <h1 className='text-[15vw] lg:text-[12vw] uppercase font-bold leading-none'>
          projects
        </h1>

      </div>

      {/* projects */}

      <div className='hero pt-5 lg:pt-8 flex flex-col'>

        {images.map((item,idx)=>(

          <div className='lol will-change-transform' key={idx}>

            <ProjectsList
              image1={item.image1}
              image2={item.image2}
            />

          </div>

        ))}

      </div>

    </div>
  )
}

export default Projects