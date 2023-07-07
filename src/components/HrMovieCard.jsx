import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function HrMovieCard({movie}) {
  return (
    <div className='hover:scale-110 transition-all duration-150 ease-in'>
    <img src={IMAGE_BASE_URL+movie.backdrop_path} 
    className='w-28 md:w-64 rounded-lg hover:border-2 border-gray-400 cursor-pointer shadow-lg 
    shadow-gray-800
    '/>
    <div className='mt-2 bg-[#070913;] p-1 rounded-lg shadow-md 
        shadow-gray-800 '>
    <h2 className='w-28 md:w-64 text-white text-center mt-2 cursor-pointer hover:underline'>{movie.title}</h2>
    <h2 className='w-28 md:w-64 text-gray-600 text-sm text-center '>Rating : {movie.vote_average}/10</h2>
    </div>
    </div>
  )
}

export default HrMovieCard