import React, { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { HiOutlineMenu } from "react-icons/hi";
import { FaArrowTurnUp } from "react-icons/fa6";
import img1 from '../src/data/img-1.webp'
import img2 from '../src/data/img-2.jpg'
import img3 from '../src/data/img-3.jpg'
import img4 from '../src/data/img-show-1.jpg'
import img5 from '../src/data/img-show-2.jpg'
import img6 from '../src/data/img-show-3.jpg'

gsap.registerPlugin(useGSAP);

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  const firstName = 'Clear'
  const SecondName = 'Focus'

  const splitFirstName = firstName.split('')
  const splitSecondName = SecondName.split('')

  const TL1 = gsap.timeline()

  const screenWidth = window.innerWidth;
  let rightRotate = 20;
  let leftRotate = -20;

  if (screenWidth < 768) {
    rightRotate = 8;
    leftRotate = -8;
  } else if (screenWidth < 1024) {
    rightRotate = 12;
    leftRotate = -12;
  }

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

    // Title For All Devices 
    TL1.to('.TTtitle, .TT-p', {
      opacity: 1,
      stagger: 0.3,
      duration: 0.7,
      ease: 'power3.inOut'

    }, 'a3')


    // 3_IMG
    TL1.to('.C2_img_main', {
      delay: -0.2,
      y: '0%',
      duration: 0.7,
      ease: 'power3.inOut'
    })
    TL1.to('.C2_img_Right', {
      rotate: rightRotate,
      duration: 0.7,
      ease: 'power3.inOut'
    }, 'a4')
    TL1.to('.C2_img_left', {
      rotate: leftRotate,
      duration: 0.7,
      ease: 'power3.inOut'
    }, 'a4')
    TL1.to('.cont-3', {
      opacity: 1,
      duration: 0.7,
      ease: 'power3.inOut'
    }, 'a4')


  }

  const slideShow = () => {
    gsap.to('.slide-text-box', {
      x: '-50%',
      duration: 10,
      ease: 'linear',
      repeat: -1
    })
  }

  const ShowImages = () => {
    const TL2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.Show_Img_Cont',
        start: 'top top',
        end:'+=400%',
        // markers: true,
        scrub: 1,
        pin: true
      }
    })
    TL2.to('.Show_img-1',{
      width:'90%',
      height:'90dvh',
      // duration:'1',
      ease:'linear'
    })
    TL2.to('.Show_img-1',{
      scale:0.8,
      ease:'linear'
    },'b1')
    TL2.to('.Show_img-2',{
      top:'5%',
      ease:'linear'
    },'b1')
    TL2.to('.Show_img-2',{
      scale:0.8,
      ease:'linear'
    },'b2')
    TL2.to('.Show_img-3',{
      top:'5%',
      ease:'linear'
    },'b2')


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
    slideShow()
    ShowImages()
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

        {/* Continer-1  ~ Nav Bar */}
        <div className='w-full h-fit bg-[#202020] relative'>
          <div className=' w-[500px] h-[500px] bg-[#F83F3F] max-md:w-[90%] rounded-full absolute top-[10%] left-1/2 translate-y-[-50%] translate-x-[-50%] blur-[150px] z-[10]'></div>

          {/* Nav-Bar */}
          <div className='w-full h-fit flex justify-between items-center max-md:px-[20px] px-[40px] py-[20px]'>

            {/* Logo */}
            <span className='TrapM text-[#efefef] text-[2rem] leading-[2rem] z-[90]'>CF</span>

            {/* Menu-Btn */}
            <div className='w-fit h-fit p-[2px] border-[1px] border-[#efefef] rounded-full gap-[2px] flex justify-center items-center select-none cursor-pointer z-[90]'>

              {/* Circle */}
              <div className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#efefef]'>
                < FaArrowTurnUp className='text-[#410e0e] rotate-[180deg] text-[0.8rem]' />
              </div>

              {/* Menu Div */}
              <div className='w-fit h-fit p-[2px] flex bg-[#efefef] rounded-full pl-[20px] justify-center items-center'>

                <span className='TrapM text-[#272727] text-[1rem] leading-[1rem] pr-[10px] mt-[2px]'>Menu</span>

                {/* Menu Circle */}
                <div className='w-[30px] h-[30px] rounded-full bg-[#410e0e] flex justify-center items-center'>
                  <HiOutlineMenu className='text-[#efefef] text-[1rem]' />
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Container-2 ~ Home Main */}
        <div className='w-full h-fit bg-[#202020] flex flex-col  max-sm:px-[20px] sm:px-[40px] items-center justify-center md:items-start overflow-hidden relative'>

          {/* Title For All Devices  */}
          <div className=' w-full h-fit flex flex-col max-md:mt-[40px] z-[80] will-change-transform justify-center items-center max-w-[370px] md:max-w-[600px] md:mt-[20px] lg:max-w-full  text-center md:text-start lg:items-start select-none'>
            <h1 className='TrapB TTtitle text-[2.4rem] leading-[2.4rem] opacity-0  md:text-[2rem] md:leading-[2rem] text-[#efefef] tracking-tight lg:max-w-[500px] '>Discover Style & Find Your Perfect Pair & Own Style.</h1>
            <div className='w-fit h-fit  flex lg:text-justify lg:w-full lg:justify-end'>
              <p className='px-[10px] TT-p mt-[17px] md:mt-[10px] opacity-0 will-change-transform text-[1.2rem] leading-[1.2rem]  md:text-[1rem] md:leading-[1rem] md:px-[0px] text-[#D4D4D4] lg:max-w-[400px]'>Unlock your true pontential proven strategies to sharpen  your mind, boost productivity and achive what matters most.</p>
            </div>
          </div>


          {/* 3_IMG */}
          <div className='w-full h-fit flex flex-col justify-center items-center'>

            {/* All Images Mid-Center */}
            <div className='C2_img_main w-[300px] h-[470px] z-[99] max-sm:mt-[40px] mt-[90px] md:mt-[40px] relative max-sm:w-[250px] max-sm:h-[370px] translate-y-[130%]'>

              {/* Main Image */}
              <div className=' w-full h-full bg-cyan-400 absolute top-0 z-[80] max-sm:w-[250px] overflow-hidden rounded-[10px] '>
                <img className='w-full h-full object-cover object-center' src={img1} alt="" />
              </div>

              {/* Main-Right-IMG */}
              <div className='C2_img_Right w-full h-full bg-orange-400 absolute top-6 origin-bottom rotate-0 max-md:rotate-0 max-sm:rotate-0 max-sm:w-[250px] overflow-hidden rounded-[10px] z-[79]'>
                <img className='w-full h-full object-cover object-center' src={img2} alt="" />
              </div>

              {/* Main-Leftt-IMG */}
              <div className='C2_img_left w-full h-full bg-pink-400 absolute top-6 origin-bottom rotate-0 max-md:-rotate-0 max-sm:-rotate-0 max-sm:w-[250px] overflow-hidden rounded-[10px] z-[79]'>
                <img className='w-full h-full object-cover object-center' src={img3} alt="" />
              </div>

            </div>

          </div>


        </div>

        {/* Container-3 ~ Logo-Slider */}
        <div className='cont-3 opacity-0 w-full h-fit bg-[#202020] overflow-hidden flex pt-[50px] select-none'>

          <span className='slide-text-box w-fit flex text-[5rem] TrapSB text-[#efefef] whitespace-nowrap will-change-transform'>
            <h1>CLEAR FOCUS</h1>
            <h1 className='text-[#bb1212]'>*</h1>
            <h1 className=' blur-[4px]'>CLEAR FOCUS</h1>
            <h1 className='text-[#bb1212]'>*</h1>
            <h1>CLEAR FOCUS</h1>
            <h1 className='text-[#bb1212]'>*</h1>
            <h1 className=' blur-[4px]'>CLEAR FOCUS</h1>
            <h1 className='text-[#bb1212]'>*</h1>
          </span>
          <span className='slide-text-box w-fit flex text-[5rem] TrapSB text-[#efefef] whitespace-nowrap will-change-transform'>
            <h1>CLEAR FOCUS</h1>
            <h1 className='text-[#bb1212]'>*</h1>
            <h1 className=' blur-[4px]'>CLEAR FOCUS</h1>
            <h1 className='text-[#bb1212]'>*</h1>
            <h1>CLEAR FOCUS</h1>
            <h1 className='text-[#bb1212]'>*</h1>
            <h1 className=' blur-[4px]'>CLEAR FOCUS</h1>
            <h1 className='text-[#bb1212]'>*</h1>
          </span>

        </div>

        {/* Container-4 Show-Images-Animate */}
        <div className='Show_Img_Cont w-full h-[100dvh] flex flex-col bg-[#202020] items-center justify-center relative overflow-hidden '>


          {/* 1-IMG-Container */}
          <div className='Show_img-1 w-[50%] h-[50dvh] rounded-[20px] will-change-transform overflow-hidden '>
            <img className='w-full h-full object-cover object-center' src={img4} alt="" />
          </div>

          {/* 2-IMG-Container */}
          <div className='Show_img-2 w-[90%] h-[90dvh]  rounded-[20px] absolute top-[100%] will-change-transform overflow-hidden '>
            <img className='w-full h-full object-cover object-center' src={img5} alt="" />
          </div>

          {/* 3-IMG-Container */}
          <div className='Show_img-3 w-[90%] h-[90dvh]  rounded-[20px] absolute top-[100%] will-change-transform overflow-hidden '>
            <img className='w-full h-full object-cover object-center' src={img6} alt="" />
          </div>



        </div>

        {/* Container-5  */}
        <div className='w-full h-fit flex bg-[#202020]'>

        </div>


      </div>
    </>
  )
}

export default App