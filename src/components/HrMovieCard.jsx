import React, { useState } from 'react'
import err from './../assets/images/err.jpeg'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function HrMovieCard({movie}) {
  const [txt,settxt]=useState(false);
  return (
    <div className='hover:scale-110 transition-all duration-150 ease-in' onClick={()=>settxt(true)} onMouseLeave={()=>settxt(false)}>
    <img src={IMAGE_BASE_URL+movie.backdrop_path} onError={event=>{
      event.target.src=err,
      event.onerror=null
    }}
    className='w-28 md:w-64 rounded-lg hover:opacity-40 hover:border-2 border-gray-400 cursor-pointer shadow-lg 
    shadow-gray-800
    '/>
    <div className='mt-2 bg-[#070913;] p-1 rounded-lg shadow-md 
        shadow-gray-800 '>
    <h2 className='w-28 md:w-64 text-white text-center mt-2 cursor-pointer'>{movie.title}</h2>
    <h2 className='w-28 md:w-64 text-gray-600 text-sm text-center cursor-pointer '>Rating : {movie.vote_average}/10</h2>
    <h3 className={`w-28 md:w-64 text-gray-600 text-sm text-center ${txt?"":"hidden"} `}>{movie.overview}</h3>
    </div>
    </div>
  )
}

export default HrMovieCard