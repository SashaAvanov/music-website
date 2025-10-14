import React from 'react'
import playingacoustic from '../assets/images/playingacoustic.jpg';

const Hero = () => {
    return (
        <>
          <section className='py-8 sm:py-15 sm:h-screen'>
              <div className="max-w-5xl mx-auto px-8 flex flex-col items-center">
                  <p className='md:text-center pb-5 sm:pb-10 text-lg lg:text-xl'>
                      Hey there! I'm Sasha, a multi-instrumentalist, composer, and instructor based out of Sacramento. Scroll down to learn about my lesson offerings or click the Music tab to check out my work! Thanks for visiting and I look forward to connecting. 
                  </p>
                  <img src={ playingacoustic } alt="Sasha playing an acoustic guitar" className='h-auto mx-auto w-xs sm:w-md rounded-lg'/>
              </div>
          </section>
        </>
  )
}

export default Hero