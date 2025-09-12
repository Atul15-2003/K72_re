import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = () => {
  const currentPath = useLocation().pathname

  const stairParentRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()
      tl.to(stairParentRef.current, {
        display: 'block',
    })

    tl.from('.stair', {
      height: 0,
      stagger: {
        amount: -0.3,
      }
    })
    tl.to('.stair', {
      y: '100%',
      stagger: {
        amount: -0.3,
      }
    })
    tl.to(stairParentRef.current, {
      display: 'none',
    })
    tl.to('.stair', {
      y: '0%',
    })
  }, [currentPath])


  return (
    <div ref={stairParentRef}>
      <div className='h-screen w-full fixed z-20 top-0'>
        <div className='h-full w-full flex fixed'>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
        </div>
      </div>
    </div>
  )
}

export default Stairs
