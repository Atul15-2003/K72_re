import React from 'react'
import Video from './video' 

const HomeHeroText = () => {
  return (
    <div className='font-[orbitron] pt-3 text-center'>
        <div className ='text-[10vw] justify-center flex item-center uppercase leading-[9vw]'>The spark for </div>
        <div className ='text-[9vw] justify-center flex items-center uppercase leading-[8vw]'>
           all 
           <div className='h-[9vw] rounded-full overflow-hidden'>
             <Video />
           </div>
           things
        </div>
        <div className ='text-[8vw] justify-center flex item-center uppercase leading-[7vw]'>creative</div>
    </div>
  )
}

export default HomeHeroText
