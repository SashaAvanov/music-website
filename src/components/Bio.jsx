import React from 'react'

import { NavLink } from 'react-router-dom'

const Bio = () => {
  return (
    <>
      <section className='py-10 max-w-5xl mx-auto px-8'>
        <h3 className='text-3xl lg:text-4xl text-center'>About Me</h3>
        <div className='text-lg lg:text-xl py-5'>
            <p className='pb-3'>
                I was born and raised in the sunny Greater Sacramento area and became very interested in music in middle school when my best friend wanted to start a rock band. He lent me his guitar and I quickly fell in love with playing and writing songs, and I took lessons at Nicholson's Music Co. in Folsom all the way through high school. 
            </p>
            <p className='py-3'>
                From there I studied Jazz Composition/Arranging at Temple University in Philadelphia and got to work with some incredible people including Greg Kettinger, Ben Schacter, Norman David, and the late Tom Giacabetti. I performed as a solo artist, with my folk/acoustic/pop band Tree Stampede, as a hired guitarist for weddings and private events, and as a drummer with Shadowmaker. 
            </p>
            <p className='py-3'>
                I also made many amazing friends in Philly with whom I've had the pleasure of making music and learning from. Check out the Music tab to see some of the projects we worked on. There you can also find my first album, Coast to Coast. It was a very rewarding project and I hope to release a lot more music in the coming years!
            </p>
            <p className='pt-3'>
                I moved back to Sacramento in the fall of '23 and began exploring other interests including <a href="https://avanovtraining.netlify.app/" target='_blank' rel='noopener noreferrer' className='text-purple-700'>personal training</a> and website development. I've still been playing with wedding bands and teaching, and my current musical goals are getting back to performing regularly, playing lots of drums, and releasing new music. Thanks for reading and I look forward to collaborating and/or sharing music with you!
            </p>
        </div>
      </section>
    </>
  )
}

export default Bio