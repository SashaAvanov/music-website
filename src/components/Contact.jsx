import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  return (
    <>
      <section id='contact' className='flex flex-col items-center pt-10 pb-5 text-lg'>
        <span>Let's connect! Send me a message at</span>
        <span>sashaavanovmusic@gmail.com</span>
				<ul className='flex justify-between py-5'>
          <li>
            <a href="https://www.instagram.com/sashaavanov/" target="_blank" rel="noopener noreferrer" className=''><FontAwesomeIcon icon={ faInstagram } size='3x'/></a>
          </li>
          <li>
            <a href="https://www.youtube.com/@sashaavanovmusic262" target="_blank" rel="noopener noreferrer" className=''><FontAwesomeIcon icon={ faYoutube } size='3x'/></a>            
          </li>
					<li>
            <a href="mailto:sashaavanovmusic@gmail.com" target="_blank" rel="noopener noreferrer" className=''><FontAwesomeIcon icon={ faEnvelope } size='3x'/></a>
          </li>
				</ul>
				<span className='text-sm'>&copy; Sasha Avanov, 2025</span>     
      </section>
    </>
  )
}

export default Contact