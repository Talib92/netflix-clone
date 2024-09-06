import React from 'react'

const MovieTitle = ({title, description} ) => {
  return (
    <div className='pt-[20%] md:pt-[25%] lg:pt-[15%]  md:pl-10 pl-10 absolute text-white w-screen aspect-video bg-gradient-to-r from-black ' >
        <h1 className='font-bold md:text-4xl lg:text-5xl text-5xl mb-2 md:-mt-12 ' >{title}</h1>
        <p className='font-semibold md:w-8/12 lg:w-6/12 md:text-base lg:text-lg w-6/12 mb-2 md:-mt-2 sm:w-9/12' >{description}</p>
        <div>
            <button className='bg-red-700 px-6 py-2 mr-2 mt-4 font-semibold rounded-md text-white text-sm md:text-base lg:text-lg hover:bg-red-600'> Play</button>
            <button className='bg-red-700 px-6 py-2 mr-2 mt-4 font-semibold rounded-md text-white text-sm md:text-base lg:text-lg hover:bg-red-600'>More Info</button>
        </div>
    </div>
  )
}

export default MovieTitle