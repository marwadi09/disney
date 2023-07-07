import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3";
const api_key="2b397daa6197b76032022ecc3d0514bd";

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2b397daa6197b76032022ecc3d0514bd';

const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);

const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,getMovieByGenreId
}