import React from 'react'

import albumArt from '../assets/images/Coast-to-Coast-art.jpg'
import soundcloud from '../assets/images/soundcloud.png'

const Samples = () => {
    const sampleClass = 'text-center py-10 sm:p-10 inline-block';
    const sampleHeading = 'pb-[10px] text-2xl md:text-3xl'
    const container = 'm-auto w-xs sm:w-md md:w-2xl lg:w-3xl';
    const imageClass = 'm-auto w-3xs sm:w-xs md:w-sm';
    const descriptionClass = 'pt-2 text-lg';


  return (
    <>
        <section className='grid grid-cols-1 mx-4 pb-20'>
            <div className={ sampleClass }>
                <h3 className={ sampleHeading }>Coast to Coast</h3>
                <div className={ container }>
                    <a href="https://distrokid.com/hyperfollow/sashaavanov/coast-to-coast" target='_blank' rel='noopener noreferrer' className='inline-block w-2xs sm:w-sm m-auto'>
                        <img src={albumArt} alt="Album art: old Moon transitioning to new Moon" className={ imageClass }/>
                    </a>
                    <p className={ descriptionClass }>This is a solo guitar album I released in 2020 with mixing and mastering done by Kory Burrell. These pieces are inspired by the time I spent working with American Conservation Experience in Arizona and navigating the transitional time post-college.
                    </p>
                </div>
            </div>

            <div className={ sampleClass }>
                <h3 className={ sampleHeading }>Orbiting</h3>
                <div className={ container }>
                    <iframe className='youtube-container' src="https://www.youtube.com/embed/HSgGHDGlTbQ?si=s2NVpvNyq3OE2cD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p className={ descriptionClass }>My dear friend <a href="https://www.gabemiller.net/" target='_blank' rel='noopener noreferrer'>Gabe Miller</a> and I co-produced this cover of "Orbiting" by The Weepies. We love their music and had a blast cooking up these guitar parts.</p>
                </div>
            </div>

            <div className={ sampleClass }>
                <h3 className={ sampleHeading }>Warm in December</h3>
                <div className={ container }>
                    <iframe className='youtube-container' src="https://www.youtube.com/embed/dDm9V8YXDYM?si=Pa3W9JQpyOeQ9YW8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p className={ descriptionClass }>My longtime friends Zach Tridico and Olivia Backal-Balik and I have hosted remote recitals for our music students since 2021. We love arranging and recording songs together and get the opportunity to prepare a teacher performance at each recital. This is one of our more recent ones - a cover of Samara Joy's arrangement of the jazz standard "Warm in December."</p>
                </div>
            </div>

            <div className={ sampleClass }>
                <h3 className={ sampleHeading }>Fire Emblem</h3>
                <div className={ container }>
                    <iframe className='youtube-container' src="https://www.youtube.com/embed/q9t9zRs0m30?si=EG35kLp9f4LQ0a6j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p className={ descriptionClass }>Zach Tridico and I both grew up gaming on Nintendo consoles and have a lot of love for their games' soundtracks. Olivia Backal-Balik joins us for this short arrangement of the Fire Emblem Theme from Super Smash Bros. Melee (Captain Falcon mains rise up).</p>
                </div>
            </div>

            <div className={ sampleClass }>
                <h3 className='text-2xl md:text-3xl'>SoundCloud</h3>
                <div className={ container }>
                    <a href="https://soundcloud.com/sashaavanov" target='_blank' rel='noopener noreferrer' className='inline-block h-45 w-45 m-auto'>
                        <img src={soundcloud} alt="SoundCloud logo" className='h-45'/>
                    </a>
                    <p className='text-lg'>
                        More recordings and samples!
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Samples