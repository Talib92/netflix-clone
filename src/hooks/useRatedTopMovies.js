import { useDispatch } from "react-redux";
import { addRatedTopMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useRatedTopMovies = () =>{
    const dispatch = useDispatch();
  
    const getTopRatedMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
      const json = await data.json();
    //   console.log(json)

      dispatch(addRatedTopMovies(json.results))
    };

    useEffect(() =>{
        getTopRatedMovies();
    }, []);
}
export default useRatedTopMovies;