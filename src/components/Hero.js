import React from 'react'
import './Hero.css'
import { TypeAnimation } from 'react-type-animation';
const Hero = ()=>{
    return(
        <>
            <section className='Hero' id='hero'>
                <div className='text-info'>
                    <div className='dev-info'>
                        <strong>Hi, I'm Letera Tesfaye, Full Stack Developer.</strong>
                    </div>
                    <div className='dev-info'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially

                                'My skills emcompass:',
                                1000,
                                'MERN stack, NextJS, Redux librarie,',
                                2000,
                                'SQL and NoSQL databases,',
                                2000,
                                'React Hooks and Custom Hooks,',
                                2000,
                                'Linux commands and Shell scripting,',
                                2000,
                                'API integration (SOAP and RESTful API)',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                      
                    </div>
                    <button className='btn-resume'>Get My Resume</button>
                    <button className='btn-contact'>Contact me</button>
                    
                </div>
                <div className='picture'>
                    <img src='profile.png' className='img-pic' alt='picture of Letera' />
                </div>
            </section>
        </>
    )
}
export default Hero;