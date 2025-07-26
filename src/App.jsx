import React, { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { HiOutlineMenu } from "react-icons/hi";
import { FaArrowTurnUp } from "react-icons/fa6";
import img1 from '../src/data/img-1.webp'

gsap.registerPlugin(useGSAP);

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  const firstName = 'Clear'
  const SecondName = 'Focus'

  const splitFirstName = firstName.split('')
  const splitSecondName = SecondName.split('')

  const TL1 = gsap.timeline()

  // ---------------------------------------- FUNCTIONS

  const welcomeAnimation = () => {
    TL1.to('.point', {
      y: 0,
      duration: 1,
      // ease:'power2.inOut'
      ease: 'linear'
    })
    TL1.to('.point', {
      x: 0,
      rotate: 360,
      ease: 'linear'
    })
    TL1.to('.Logo-Text', {
      y: 0,
      opacity: 1,
      stagger: 0.07,
      ease: 'power2.inOut'
    }, 'a0')
    TL1.to('.Welcome-div', {
      backgroundColor: '#E2E2E2',
      duration: 0.5,
      ease: 'linear'
    }, 'a0')
    TL1.to('.Logo-Text', {
      color: '#2c2c2c',
      duration: 0.5,
      ease: 'linear'
    }, 'a0')
    TL1.to('.point', {
      color: '#632A2A',
      duration: 0.5,
      ease: 'linear'
    }, 'a0')
    TL1.to('.Logo-Text', {
      opacity: 0,
      delay: 1,
      stagger: 0.07,
      ease: 'power2.inOut'
    }, 'a1')
    TL1.to('.point', {
      x: 120,
      delay: 1,
      rotate: -360,
      duration: 1,
      ease: 'linear'
    }, 'a1')
    TL1.to('.point', {
      y: '150%',
      opacity: 0,
      ease: 'power2.inOut'
    })
    TL1.to('.Welcome-div', {
      y: '-300%',
      height: 0,
      duration: 0.5,
      ease: 'power1.inOut'
    }, 'a2')
    TL1.to('.Welcome-div-inner-div ', {
      opacity: 0,
      display: 'none',
      duration: 0.02,
      ease: 'power1.inOut'
    }, 'a2')
  }


  // ---------------------------------------- 
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, [])

  useEffect(() => {
    welcomeAnimation()
  }, [])


  return (
    <>
      <div className='w-full relative'>

        {/* Welcome Animation */}
        <div className='Welcome-div w-full h-screen bg-[#202020] absolute top-0 left-0 z-[100] flex justify-center items-center select-none will-change-transform'>

          <div className='Welcome-div-inner-div w-full h-fit flex TrapM gap-[10px] justify-center items-center will-change-transform'>

            <div className='w-fit h-[100%] flex justify-center items-center mb-[7px] will-change-transform'>
              <VscDebugBreakpointLog className=' point text-[#efefef] text-[20px] translate-x-[120px] translate-y-[100%] rotate-0 will-change-transform' />
            </div>

            {/* Clear */}
            <div className='w-fit h-fit flex overflow-hidden will-change-transform'>
              {
                splitFirstName.map((item, index) => {
                  return (
                    <span key={index} className='text-[#efefef] text-[2.5rem] leading-[2.5rem] Logo-Text translate-y-[100%] opacity-0 will-change-transform'>{item}</span>
                  )
                })
              }
            </div>

            {/* Focus */}
            <div className='w-fit h-fit flex overflow-hidden will-change-transform'>
              {
                splitSecondName.map((item, index) => {
                  return (
                    <span key={index} className=' text-[#efefef] text-[2.5rem] leading-[2.5rem] Logo-Text translate-y-[100%] opacity-0 will-change-transform'>{item}</span>
                  )
                })
              }
            </div>
          </div>

        </div>

        {/* Conatiner-1 */}
        <div className='w-full h-fit bg-[#202020] relative'>
          <div className=' w-[500px] h-[500px] bg-[#F83F3F] max-md:w-[90%] rounded-full absolute top-[10%] left-1/2 translate-y-[-50%] translate-x-[-50%] blur-[150px] z-[10]'></div>

          {/* Nav-Bar */}
          <div className='w-full h-fit flex justify-between items-center max-md:px-[20px] px-[40px] py-[20px]'>

            {/* Logo */}
            <span className='TrapM text-[#efefef] text-[2rem] leading-[2rem] z-[90]'>CF</span>

            {/* Menu-Btn */}
            <div className='w-fit h-fit p-[2px] border-[1px] border-[#efefef] rounded-full flex justify-center items-center select-none cursor-pointer z-[90]'>

              {/* Circle */}
              <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#efefef]'>
                < FaArrowTurnUp className='text-[#410e0e] rotate-[180deg] text-[1.1rem]' />
              </div>

              {/* Menu Div */}
              <div className='w-fit h-fit p-[2px] flex bg-[#efefef] rounded-full pl-[20px] justify-center items-center'>

                <span className='TrapM text-[#272727] text-[1.2rem] leading-[1.2rem] pr-[10px]'>Menu</span>

                {/* Menu Circle */}
                <div className='w-[40px] h-[40px] rounded-full bg-[#410e0e] flex justify-center items-center'>
                  <HiOutlineMenu className='text-[#efefef] text-[1.5rem]' />
                </div>

              </div>
            </div>
          </div>
        </div>

        



      </div>
    </>
  )
}

export default App