import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  return (
    <div >
        <img className='hover:cursor-pointer  ' src={IMG_URL + poster_path} alt="" />
    </div>
  )
}

export default MovieCard