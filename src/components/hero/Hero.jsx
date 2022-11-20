import React from 'react'
import Typewriter from 'typewriter-effect';
import './hero.css'
function Hero({type}) {
  return (
    <div className='hero'>
        <div className="container">
            <div className="hero__container">
               { type ==="hero" &&
                <>
                     <h1 className='hero__heading' >
                        <Typewriter 
                            options={
                                {
                                    autoStart:true,
                                    loop: true,
                                    delay: 400,
                                    strings:[
                                        'LEOTECH ACADEMY',
                                        'LEOTECH ACADEMY',
                                        'LEOTECH ACADEMY'
                                    ]
                                
                                }
                            }
                        />
                    </h1>
                    <h4 className='hero__title' data-aos='flip-up'>
                        Learn to code from zero
                    </h4>
                    <button className="btn btn-quiz">TAKE THE QUIZ</button>
                </>
               }
               {
                type !== 'hero'&&
                <>
                     <h1 className='hero__heading' >
                    <Typewriter 
                        options={
                            {
                                autoStart:true,
                                loop: true,
                                delay: 400,
                                strings:[
                                    'Here we go!',
                                    'Here we go!',
                                    'Here we go!'
                                ]
                            
                            }
                        }
                    />
                </h1>
                <h4 className='hero__title' data-aos='flip-up'>
                    Learn Anything, Anytime, & Anywhere
                </h4>
                </>
               }
            </div>
        </div>
    </div>
  )
}

export default Hero