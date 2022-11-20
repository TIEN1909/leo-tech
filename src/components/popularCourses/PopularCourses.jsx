import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import './popularCourses.css'
function PopularCourses() {
  return (
    <div className='popular__courses'>
        <div className="container">
            <div className="popular__courses-container">
                <h2 className='popular__courses-title'>
                    Most popular Courses
                </h2>
                <div className="popular__courses-list">
                    <Link className="popular__courses-link" data-aos="fade-up">
                        <div className="popular__courses-item" title='Create a front-end app with React'>
                            <div className="popular__courses-image">
                                <img src="./assets/images/popularCourses/front-end-app-with-react.jpg" alt="" className="popular__courses-img" />
                            </div>
                            <div className="popular__courses-wrapper">
                                <span className="popular__courses-dev">
                                    Web Development
                                </span>
                                <h3 className="popular__courses-name" >
                                    Create a front-end app with React
                                </h3>
                                <Link className='popular__courses-more'>
                                    <span>
                                        READ MORE
                                    </span>
                                    <BsArrowRight className='icon'/>
                                </Link>
                            </div>
                        </div>
                    </Link>
                    
                    <Link className="popular__courses-link" data-aos="fade-up">
                        <div className="popular__courses-item" title='Create a back-end app with JavaScript'>
                            <div className="popular__courses-image">
                                <img src="./assets/images/popularCourses/back-end-app-with-javascript.jpg" alt="" className="popular__courses-img" />
                            </div>
                            <div className="popular__courses-wrapper">
                                <span className="popular__courses-dev">
                                    Web Development
                                </span>
                                <h3 className="popular__courses-name" >
                                    Create a back-end app with JavaScript
                                </h3>
                                <Link className='popular__courses-more'>
                                    <span>
                                        READ MORE
                                    </span>
                                    <BsArrowRight className='icon'/>
                                </Link>
                            </div>
                        </div>
                    </Link>

                    <Link className="popular__courses-link" data-aos="fade-up">
                        <div className="popular__courses-item" title='Build Python Web Apps with Django/Flask'>
                            <div className="popular__courses-image">
                                <img src="./assets/images/popularCourses/build-python-web-apps-with-django.png" alt="" className="popular__courses-img" />
                            </div>
                            <div className="popular__courses-wrapper">
                                <span className="popular__courses-dev">
                                    Web Development
                                </span>
                                <h3 className="popular__courses-name" >
                                    Build Python Web Apps with Django/Flask
                                </h3>
                                <Link className='popular__courses-more'>
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

export default PopularCourses