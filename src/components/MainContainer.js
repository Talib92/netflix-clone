import React from 'react'
import MovieTitle from './MovieTitle';
import BackgroundMovie from './BackgroundMovie';
import { useSelector } from 'react-redux';

const MainContainer = () => {

    
  const movies = useSelector((store) => store.movie?.nowPlayingMovies)
  if(movies === null) return; // if(!movies) return;
  const mainMovie = movies[0];
  //console.log(mainMovie)

  const {original_title, overview, id} = mainMovie;

  return (
    <>
        <MovieTitle title = {original_title} description = {overview}  />
        <BackgroundMovie movieId = {id}/>
    </>
  )
}

export default MainContainer