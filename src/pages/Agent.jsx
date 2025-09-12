import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'

const Agent = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  
  const imgArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SebR_640X960-640x960.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
  ]

  useGSAP( function() {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start:'top 29%',
        end:'top -70%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        
        onUpdate: (elem) => {
          let imageIndex;

          if(elem.progress < 1) {
            imageIndex =  Math.floor(elem.progress * imgArray.length);
          } else {
            imageIndex = imgArray.length - 1;
          }
            imageRef.current.src = imgArray[imageIndex];
        }
      }
    })

  })

  return (
    <div className="text-white">
      <div className='section1 py-1'>
        <div ref={imageDivRef} className='absolute overflow-hidden h-[20vw] rounded-4xl w-[15vw] top-150 left-[25vw]'>
          <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className=' relative font-[orbitron]'>
          <div className=' mt-[55vh]'>
            <h1 className='text-[17.5vw] text-center uppercase leading-[14.5vw]'>SEVEN7Y <br />
              TWO</h1>
          </div>
          <div className=' font-[Lausanne-500] pl-[47%] mt-35'>
            <p className='text-9xl h-[20vh] w-[50vw]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We're inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>
      <div className='section2 h-screen'>

      </div>
    </div>
  )
}
export default Agent
