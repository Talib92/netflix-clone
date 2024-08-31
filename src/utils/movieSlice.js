import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        upcomingMovies:null,
        topMovies:null,
        popularMovies: null,
        nowPlayingMovies : null,
        movieTrailer: null
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies =  action.payload
        },
        addMovieTrailer:(state, action)=>{
            state.movieTrailer =  action.payload
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies =  action.payload
        },
        addRatedTopMovies:(state, action)=>{
            state.topMovies =  action.payload
        },
        addUpcomingMovies:(state, action)=>{
            state.upcomingMovies =  action.payload
        },
    }
});

export const {addNowPlayingMovies, addMovieTrailer, addPopularMovies, addRatedTopMovies, addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;