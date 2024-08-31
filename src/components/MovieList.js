import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    console.log(movies)
  return (
    <div>
         <h1 className='font-bold text-3xl px-2 text-white py-4 mx-8'>{title}</h1>
            <div>
                <div className='px-2 grid grid-cols-10 gap-4 mx-8'>
                    {movies?.map((movie)=> <MovieCard key={movie.id} poster_path={movie.poster_path} /> )}
                {/* <MovieCard poster_path={movies[0].poster_path} />  instead of this do map. */}
                </div>
            </div>
    </div>
  )
}

export default MovieList