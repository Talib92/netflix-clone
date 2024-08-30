import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useTrailer = (movieId) => {

    const dispatch = useDispatch();
    // const [tariler, setTrailer] = useState(null)

    const getMovieVideos = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/" +movieId+ "/videos?language=en-US", API_OPTIONS)

        const json = await data.json();
        //console.log(json)

        const filterTrailer = json.results.filter((video) => video.type === "Trailer")
        const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
        // console.log(trailer)
        // setTrailer(trailer.key) // the use below as trailer
        dispatch(addMovieTrailer(trailer))
    };

    useEffect(() =>{
        getMovieVideos();
    },[])

}

export default useTrailer;