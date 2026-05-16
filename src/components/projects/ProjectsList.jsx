

const ProjectsList = ({ image1, image2 }) => {

  return (

    <div className='flex flex-col lg:flex-row gap-2 lg:gap-3 px-3 py-2'>

      {/* first image */}

      <div className='relative group w-full overflow-hidden rounded-2xl'>

        <img
          className='w-full h-[100vw] lg:h-[35vw] object-cover transition-all duration-300 lg:group-hover:rounded-4xl'
          src={image1}
          alt=""
        />

        <h1
          className='
          absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            text-white
            border-2
            rounded-full
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
            text-xl
            lg:text-5xl
            px-3
            lg:px-4
            py-1
            whitespace-nowrap
          '
        >
          View project
        </h1>

      </div>

      {/* second image */}

      <div className='relative group w-full overflow-hidden rounded-2xl'>

        <img
          className='w-full h-[100vw] lg:h-[35vw] object-cover transition-all duration-300 lg:group-hover:rounded-4xl'
          src={image2}
          alt=""
        />

        <h1
          className='
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            text-white
            border-2
            rounded-full
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
            text-xl
            lg:text-5xl
            px-3
            lg:px-4
            py-1
            whitespace-nowrap
          '
        >
          View project
        </h1>

      </div>

    </div>
  )
}

export default ProjectsList