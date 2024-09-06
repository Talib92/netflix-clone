import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movie);
  return (
    <div className='bg-black bg-opacity-85'>

      <div className='-mt-44  md:-mt-1 lg:-mt-4 xl:-mt-28 sm:-mt-[-40px] relative z-10 pb-4'>

        <div className='px-4 md:px-8 lg:px-2'>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div>

        <div className='px-4 md:px-8 lg:px-2'>
            <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
        </div>

        <div className='px-4 md:px-8 lg:px-2'>
            <MovieList title={"Top Rated"} movies={movies.nowPlayingMovies} />
        </div>

        <div className='px-4 md:px-8 lg:px-2'>
            <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
        </div>

      {/* <MovieList title = {"Now Playing"} movies= {movies.nowPlayingMovies} /> */}
      {/* <MovieList title = {"Popular"} movies= {movies.popularMovies} />
      <MovieList title = {"Top Rated"} movies= {movies.topMovies} />
      <MovieList title = {"Upcoming"} movies= {movies.upcomingMovies} /> */}
      </div>
    </div>
  )
}

export default SecondaryContainer