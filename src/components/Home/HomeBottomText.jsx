import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[Lausanne-500] flex items-center justify-center gap-4'>
      <div className='border-4 hover:border-red-400 hover:text-red-800 flex items-center px-5 border-white rounded-full uppercase'>
        <Link className='text-[4.5vw] mt-2' to='/projects'>Projects</Link>
      </div>
      <div className='border-4 hover:border-red-400 hover:text-red-800 flex items-center px-5 border-white rounded-full uppercase'>
        <Link className='text-[4.5vw] mt-2' to='/agents'>Agents</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
