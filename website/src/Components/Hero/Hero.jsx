/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'
import Programs from '../Programs/Programs'
import About from '../About/About'
import Campus from "../Campus/Campus"
import Testmonials from "../Testimonials/testmonials"
import Contact from '../Contact/Contact'
const Hero = () => {
  return (
    <>
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure Better Education for better World</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt illum modi similique reiciendis quisquam quo facere fuga unde non, saepe, in doloribus provident exercitationem voluptas assumenda iusto voluptatibus. Debitis, obcaecati!</p>
            <button className='btn'>Explore more <img src={arrow} alt="" /></button>
        </div>
    </div>
    <div>
    <Programs/>
    </div>
    <div>
    <About/>
    </div>
    <div>
    <Campus/>
    </div>
    <div>
    <Testmonials/>
    </div>
    <div>
    <Contact/>
    </div>
    </>
  )
}

export default Hero