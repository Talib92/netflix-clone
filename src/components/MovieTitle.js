import React from 'react'

const MovieTitle = ({title, description} ) => {
  return (
    <div className='pt-[25%] pl-10 absolute text-white w-screen aspect-video bg-gradient-to-r from-black ' >
        <h1 className='font-bold text-5xl mb-2 ' >{title}</h1>
        <p className='font-semibold w-6/12 mb-2' >{description}</p>
        <div>
            <button className='bg-red-700 px-10 py-2 mr-2 font-semibold rounded-md text-white text-lg '> Play</button>
            <button className='bg-red-700 px-6 py-2 font-semibold rounded-md text-white text-lg'>More Info</button>
        </div>
    </div>
  )
}

export default MovieTitle