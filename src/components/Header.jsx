import React from 'react'
import logo from './../assets/images/movie-khoj.png'
function Header() {
    
  return (
    <div className='flex items-center justify-between p-5'>
        <img src={logo} className='w-10 md:w-16  object-cover' />
        <div className='uppercase font-serif font-medium text-2xl md:text-5xl'>movie khoj</div>
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className='w-10 rounded-full'/>
    </div>
  )
}

export default Header