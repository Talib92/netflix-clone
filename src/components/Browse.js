import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useRatedTopMovies from '../hooks/useRatedTopMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useRatedTopMovies();
  useUpcomingMovies();
  
  return (
    <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}

export default Browse