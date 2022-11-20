import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import './careerPaths.css'
function CareerPaths({type}) {
  return (
    <div className='career__paths'>
       <div className="container">
            <div className="career__paths-container">
                <h2 className='career__paths-title'>
                    Career paths
                </h2>
                <div className="career__paths-list">
                    <Link className="career__paths-link" data-aos="fade-up">
                        <div className="career__paths-item">
                            <div className={type ? "career__paths-image" : "career__paths-image1"}>
                                <img src="./assets/images/careerPaths/full-stack-software-engineer.png" alt="" className="career__paths-img" />
                            </div>
                            <div className="career__paths-wrapper">
                                {
                                    type ==='career__paths' &&
                                    <>
                                        <span className="career__paths-dev">
                                            Web Development
                                        </span>
                                    </>
                                }
                                {
                                    type !=='career__paths' &&
                                    <>
                                        <span className="career__paths-dev">
                                            PRO
                                        </span>
                                    </>
                                }
                                <h3 className={type ? "career__paths-name" : "career__paths-name1"}>
                                    Become a Full-Stack Software Engineer
                                </h3>
                                <Link className='career__paths-more'>
                                    <span>
                                        READ MORE
                                    </span>
                                    <BsArrowRight className='icon'/>
                                </Link>
                            </div>
                        </div>
                    </Link>
                    <Link className="career__paths-link" data-aos="fade-up">
                        <div className="career__paths-item">
                            <div className={type ? "career__paths-image" : "career__paths-image1"}>
                                <img src="./assets/images/careerPaths/front-end-engineer.png" alt="" className="career__paths-img" />
                            </div>
                            <div className="career__paths-wrapper">
                                {
                                    type ==='career__paths' &&
                                    <>
                                        <span className="career__paths-dev">
                                            Web Development
                                        </span>
                                    </>
                                }
                                {
                                    type !=='career__paths' &&
                                    <>
                                        <span className="career__paths-dev">
                                            PRO
                                        </span>
                                    </>
                                }
                                <h3 className={type ? "career__paths-name" : "career__paths-name1"}>
                                    Become a Front-End Engineer
                                </h3>
                                <Link className='career__paths-more'>
                                    <span>
                                        READ MORE
                                    </span>
                                    <BsArrowRight className='icon'/>
                                </Link>
                            </div>
                        </div>
                    </Link>
                    <Link className="career__paths-link" data-aos="fade-up">
                        <div className="career__paths-item">
                            <div className={type ? "career__paths-image" : "career__paths-image1"}>
                                <img src="./assets/images/careerPaths/back-end-engineer.jpg" alt="" className="career__paths-img" />
                            </div>
                            <div className="career__paths-wrapper">
                                {
                                    type ==='career__paths' &&
                                    <>
                                        <span className="career__paths-dev">
                                            Web Development
                                        </span>
                                    </>
                                }
                                {
                                    type !=='career__paths' &&
                                    <>
                                        <span className="career__paths-dev">
                                            PRO
                                        </span>
                                    </>
                                }
                                <h3 className={type ? "career__paths-name" : "career__paths-name1"}>
                                    Become a Back-End Engineer
                                </h3>
                                <Link className='career__paths-more'>
                                    <span>
                                        READ MORE
                                    </span>
                                    <BsArrowRight className='icon'/>
                                </Link>
                            </div>
                        </div>
                    </Link>
                    <Link className="career__paths-link" data-aos="fade-up">
                        <div className="career__paths-item">
                            <div className={type ? "career__paths-image" : "career__paths-image1"}>
                                <img src="./assets/images/careerPaths/data-engineer.png" alt="" className="career__paths-img" />
                            </div>
                            <div className="career__paths-wrapper">
                                {
                                    type ==='career__paths' &&
                                    <>
                                        <span className="career__paths-dev">
                                            Web Development
                                        </span>
                                    </>
                                }
                                {
                                    type !=='career__paths' &&
                                    <>
                                        <span className="career__paths-dev">
                                            Data Engineering
                                        </span>
                                    </>
                                }
                                <h3 className={type ? "career__paths-name" : "career__paths-name1"}>
                                    Become a Data Engineer
                                </h3>
                                <Link className='career__paths-more'>
                                    <span>
                                        READ MORE
                                    </span>
                                    <BsArrowRight className='icon'/>
                                </Link>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
       </div>
    </div>
  )
}

export default CareerPaths