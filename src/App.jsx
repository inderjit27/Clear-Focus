import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { VscDebugBreakpointLog } from "react-icons/vsc";
import MainIMG from '../src/data/mainBG.jpg'
import ShowImg1 from '../src/data/showImg1.jpg'
import ShowImg2 from '../src/data/showImg2.jpg'
import ShowImg3 from '../src/data/showImg3.jpg'
import img1 from '../src/data/img-1.webp'
import img2 from '../src/data/img-2.jpg'
import img3 from '../src/data/img-3.jpg'
import img4 from '../src/data/img4.jpg'
import { Draggable } from 'gsap/Draggable';
import { FiArrowUpRight } from "react-icons/fi";

gsap.registerPlugin(Draggable);

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
      ease: 'power1.inOut',
      onComplete: () => {
        document.body.classList.remove("scroll-lock");
      }
    }, 'a2')

  }

  const Slidelogotext = () => {
    gsap.to('.Slide_logo_text', {
      xPercent: -100,
      duration: 20,
      ease: 'linear',
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0)
      }
    })
  }

  const ActivateHoverEffect = (text, num) => {
    gsap.to(text, {
      y: num,
      duration: 0.5,
      ease: 'power3.inOut'
    })
  }

  const DeActivateHoverEffect = (text, num) => {
    gsap.to(text, {
      y: num,
      duration: 0.5,
      ease: 'power3.inOut'
    })
  }

  const ShowContDataImg = () => {
    const TL3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.ShowCont',
        start: 'top top',
        end: '+=300%',
        // markers: true,
        scrub: 1,
        pin: true
      }
    })

    TL3.to('.show1Cont', {
      scale: 0.80,
      ease: 'linear'
    }, 'c1')
    TL3.to('.show2Cont', {
      top: '5%',
      ease: 'linear'
    }, 'c1')
    TL3.to('.show2Cont', {
      scale: 0.80,
      ease: 'linear'
    }, 'c2')
    TL3.to('.show3Cont', {
      top: '5%',
      ease: 'linear'
    }, 'c2')

  }

  const RoundCircle = (item) => {
    gsap.to(item, {
      rotate: 180,
      duration: 0.5,
      ease: 'power1.inOut'
    })
  }

  const PreRoundCircle = (item) => {
    gsap.to(item, {
      rotate: 0,
      duration: 0.5,
      ease: 'power1.inOut'
    })
  }


  // ---------------------------------------- 


  useEffect(() => {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove((time) => lenis.raf(time * 1000));
  }, []);

  useEffect(() => {
    document.body.classList.add("scroll-lock");
    welcomeAnimation()
    Slidelogotext()
    ShowContDataImg()
  }, [])



  return (
    <>
      <div className='w-full relative max-w-[1920px] m-auto'>

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

        {/* Nav-Bar */}
        <div className=' w-full fixed top-0 left-0 flex z-[90] max-md:px-[20px] md:px-[40px] py-[40px] items-center select-none defText'>

          {/* LOGO */}
          <p className='defText TrapM text-[28px] leading-[28px] tracking-tight z-[90] cursor-pointer'>CF</p>

          {/* MENU */}
          <div onMouseEnter={() => ActivateHoverEffect('.mtext', '-24px')} onMouseLeave={() => DeActivateHoverEffect('.mtext', '0px')} className='ml-auto w-fit h-[24px] flex flex-col bg-transparent overflow-hidden z-[90]'>
            <span className='defText mtext TrapM text-[24px] leading-[24px] tracking-tight z-[90] cursor-pointer'>Menu</span>
            <span className='defText mtext TrapM text-[24px] leading-[24px] tracking-tight z-[90] cursor-pointer'>Menu</span>
          </div>

        </div>

        {/* Main Page */}
        <div className='w-full h-[100dvh] overflow-hidden relative select-none z-[89]'>
          <img className='w-full h-full object-cover object-center z-[89]' src={MainIMG} alt="" />

          {/* Slider-box */}
          <div className='w-full h-fit absolute grad bottom-0 left-0  pt-[50px] pb-[10px] overflow-hidden TrapSB text-[10rem] leading-[10rem] text-[#fff] flex whitespace-nowrap'>
            <span className='Slide_logo_text w-fit h-fit flex'>
              <h1 className='px-[10px]'>CLEAR FOCUS</h1>
              <p className='px-[10px] '>*</p>
              <h1 className='px-[10px] filter blur-[4px]'>CLEAR FOCUS</h1>
              <p className='px-[10px] '>*</p>
              <h1 className='px-[10px]'>CLEAR FOCUS</h1>
              <p className='px-[10px] '>*</p>
              <h1 className='px-[10px] filter blur-[4px]'>CLEAR FOCUS</h1>
            </span>
            <span className='Slide_logo_text w-fit h-fit flex'>
              <h1 className='px-[10px]'>CLEAR FOCUS</h1>
              <p className='px-[10px] '>*</p>
              <h1 className='px-[10px] filter blur-[4px]'>CLEAR FOCUS</h1>
              <p className='px-[10px] '>*</p>
              <h1 className='px-[10px]'>CLEAR FOCUS</h1>
              <p className='px-[10px] '>*</p>
              <h1 className='px-[10px] filter blur-[4px]'>CLEAR FOCUS</h1>
            </span>
          </div>
        </div>

        {/* Tag-Line */}
        <div className='w-full h-fit max-md:pr-[20px] md:pr-[40px] md:px-[50%] max-md:pl-[20px]  py-[60px]'>
          <h2 className='TrapSB text-[2.1rem] leading-[2.1rem] text-[#d1d1d1] text-justify'>Find Your Perfect Pair. Discover Style, Durable, and Affordable eyewear that complements your personality and protect your vision.</h2>
        </div>

        {/* ShowCont */}
        <div className='ShowCont w-full h-[100dvh] flex justify-center items-center relative overflow-hidden'>

          <div className='show1Cont w-[90%] h-[90dvh] overflow-hidden'>
            <img className='w-full h-full object-cover object-center' src={ShowImg1} alt="" />
          </div>

          <div className='show2Cont w-[90%] h-[90dvh] absolute top-[120%] overflow-hidden'>
            <img className='w-full h-full object-cover object-center' src={ShowImg2} alt="" />
          </div>

          <div className=' show3Cont w-[90%] h-[90dvh] absolute top-[120%] overflow-hidden'>
            <img className='w-full h-full object-cover object-center' src={ShowImg3} alt="" />
          </div>

        </div>

        {/* InfoCont */}
        <div className='w-full h-fit max-md:py-[20px] md:py-[40px] flex flex-col max-md:px-[20px] md:px-[40px]'>

          <div className='w-full h-fit flex flex-col'>
            <h2 className='TrapSB max-md:text-[2.5rem] max-md:leading-[2.5rem] md:text-[4rem] md:leading-[4rem] text-[#efefef]'>Find Your Perfect Pair.</h2>
          </div>

          <div className='w-full h-fit flex flex-col'>
            <h2 className='TrapM max-w-[600px] max-md:text-[1.5rem] max-md:leading-[1.5rem] md:text-[2rem] md:leading-[2rem] text-[#afafaf] tracking-tight mt-[20px] text-justify'>Discover Style, Durable, and Affordable eyewear that complements your personality and protect your vision.</h2>
          </div>

          <div className='w-full h-fit flex flex-col mt-[20px] select-none cursor-pointer'>
            <div className='w-fit h-fit bg-[#efefef] rounded-full pl-[20px] flex p-[2px] justify-center items-center'>
              <p className='TrapSB text-[#202020] mr-[10px] mt-[2px]'>Explore Now</p>

              <div className='w-[40px] h-[40px] bg-amber-950 rounded-full flex justify-center items-center'>
                <FiArrowUpRight className='text-[24px] text-[#efefef]' />
              </div>

            </div>
          </div>

        </div>

        {/* Comapany-Small-Data */}
        <div className='w-full h-fit flex justify-between max-md:p-[20px] md:p-[40px]'>
          <p className='TrapM text-[1rem] leading-[1rem] tracking-tight text-[#efefef]'>@Clear Focus</p>
          <p className='TrapM text-[1rem] leading-[1rem] tracking-tight text-[#efefef]'>@2k25</p>
        </div>

        {/* model Iag Cont With Data */}
        <div className='w-full h-fit flex gap-[20px] max-lg:flex-col max-md:px-[20px] md:px-[40px]'>
          <div className='w-full h-fit flex max-sm:flex-col gap-[20px]'>
            <div className='w-full h-fit'>
              <img className='w-full' src={img1} alt="" />
            </div>
            <div className='w-full h-fit'>
              <img className='w-full' src={img2} alt="" />
            </div>
          </div>

          <div className='w-full h-fit flex max-sm:flex-col gap-[20px]'>

            <div className='w-full h-fit'>
              <img className='w-full' src={img3} alt="" />
            </div>
            <div className='w-full h-fit'>
              <img className='w-full' src={img4} alt="" />
            </div>
          </div>

        </div>

        {/* Circle-div */}
        <div className='w-full h-fit justify-end items-end flex max-md:px-[20px] md:px-[40px] py-[40px] gap-[7px]'>

          {/* Circle-1 */}
          <div onMouseEnter={() => RoundCircle('.C1')} onMouseLeave={() => PreRoundCircle('.C1')} className='C1 w-[45px] h-[45px] flex justify-center items-center overflow-hidden rounded-full bg-[#efefef] select-none cursor-pointer'>
            < FiArrowUpRight className='text-[25px] text-[#202020]' />
          </div>

          {/* Circle-2 */}
          <div onMouseEnter={() => RoundCircle('.C2')} onMouseLeave={() => PreRoundCircle('.C2')} className='C2 w-[45px] h-[45px] flex justify-center items-center overflow-hidden rounded-full bg-[#efefef] select-none cursor-pointer'>
            < FiArrowUpRight className='text-[25px] text-[#202020]' />
          </div>

        </div>

        {/* Social-div */}
        <div className='w-full h-fit flex justify-between items-center max-md:px-[20px] md:px-[40px] mb-[50px]
        max-md:py-[20px] md:py-[40px]'>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/inderjitsingh-webdeveloper?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <div onMouseEnter={() => ActivateHoverEffect('.LinkedIn-Text', '-1rem')} onMouseLeave={() => DeActivateHoverEffect('.LinkedIn-Text', '0px')} className='w-fit h-[1rem] flex flex-col overflow-hidden select-none cursor-pointer'>
              <span className='LinkedIn-Text w-fit h-fit TrapM text-[#efefef] text-[1rem] leading-[1rem] tracking-tight'>
                <p>LinkedIn</p>
              </span>
              <span className='LinkedIn-Text w-fit h-fit TrapM text-[#efefef] text-[1rem] leading-[1rem] tracking-tight'>
                <p>LinkedIn</p>
              </span>
            </div>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/coddzin/">
            <div onMouseEnter={() => ActivateHoverEffect('.Instagram-Text', '-1rem')} onMouseLeave={() => DeActivateHoverEffect('.Instagram-Text', '0px')} className='w-fit h-[1rem] flex flex-col overflow-hidden select-none cursor-pointer'>
              <span className='Instagram-Text w-fit h-fit TrapM text-[#efefef] text-[1rem] leading-[1rem] tracking-tight'>
                <p>Instagram</p>
              </span>
              <span className='Instagram-Text w-fit h-fit TrapM text-[#efefef] text-[1rem] leading-[1rem] tracking-tight'>
                <p>Instagram</p>
              </span>
            </div>
          </a>

          {/* Twitter/X */}
          <a href="https://x.com/inderjit_2?s=11">
            <div onMouseEnter={() => ActivateHoverEffect('.TwitterX-Text', '-1rem')} onMouseLeave={() => DeActivateHoverEffect('.TwitterX-Text', '0px')} className='w-fit h-[1rem] flex flex-col overflow-hidden select-none cursor-pointer'>
              <span className='TwitterX-Text w-fit h-fit TrapM text-[#efefef] text-[1rem] leading-[1rem] tracking-tight'>
                <p>Twitter/X</p>
              </span>
              <span className='TwitterX-Text w-fit h-fit TrapM text-[#efefef] text-[1rem] leading-[1rem] tracking-tight'>
                <p>Twitter/X</p>
              </span>
            </div>
          </a>

          {/* GitHub */}
          <a href="https://github.com/inderjit27">
            <div onMouseEnter={() => ActivateHoverEffect('.GitHub-Text', '-1rem')} onMouseLeave={() => DeActivateHoverEffect('.GitHub-Text', '0px')} className='w-fit h-[1rem] flex flex-col overflow-hidden select-none cursor-pointer'>
              <span className='GitHub-Text w-fit h-fit TrapM text-[#efefef] text-[1rem] leading-[1rem] tracking-tight'>
                <p>GitHub</p>
              </span>
              <span className='GitHub-Text w-fit h-fit TrapM text-[#efefef] text-[1rem] leading-[1rem] tracking-tight'>
                <p>GitHub</p>
              </span>
            </div>
          </a>

        </div>

      </div>
    </>
  )
}

export default App