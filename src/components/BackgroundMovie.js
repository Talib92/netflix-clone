import React, { useEffect, useState } from 'react'
import useTrailer from '../hooks/useTrailer';
import { useSelector } from 'react-redux';

const BackgroundMovie = ({movieId}) => {
    const trailerVideo = useSelector((store) => store.movie?.movieTrailer);
    useTrailer(movieId);
  return (
    <div>
        <iframe className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/" + trailerVideo?.key +"?si=3lp_2Wy-yYqPx58f" + "&autoplay=1&mute=1&modestbranding=1&controls=0&rel=0&iv_load_policy=3"} 
        modestBranding="0"
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
        </iframe>
    </div>
  )
}

export default BackgroundMovie