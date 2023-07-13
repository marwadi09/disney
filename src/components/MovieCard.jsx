import React from 'react'
import err from './../assets/images/err.jpeg'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function MovieCard({movie}) {
  return (
    <div className='hover:scale-110 transition-all duration-150 ease-in '>
        <img src={IMAGE_BASE_URL+movie.poster_path} alt='https://yoast.com/app/uploads/2015/08/404_error_checking_FI.png'
        onError={event=>{
          event.target.src=err,
          event.onerror=null
        }}
        className='w-28 md:w-48 rounded-lg hover:border-2 border-gray-400 cursor-pointer shadow-lg 
        shadow-gray-800'/>
        <h2 className='w-28 md:w-48 text-gray-400 text-base text-center mt-2 bg-[#070913;] p-1 rounded-lg shadow-md 
        shadow-gray-800'>Rating : {movie.vote_average}</h2>
    </div>
  )
}

export default MovieCard