import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import './featuredCourses.css'
function FeaturedCourses() {
  return (
    <div className='featured__courses'>
        <div className="container">
            <div className="featured__courses-container">
                <h2 className='featured__courses-title'>
                    Featured Courses
                </h2>
                <div className="feature__courses-wrapper">
                    <div className="featured__courses-list">
                        <Link className="featured__courses-link" data-aos="fade-up" >
                            <div className="featured__courses-item" title='Build a Website with HTML, CSS, and Github/Gitlab'>
                                <div className="featured__courses-image">
                                    <img src="./assets/images/popularCourses/front-end-app-with-react.jpg" alt="" className="featured__courses-img" />
                                </div>
                                <div className="featured__courses-wrapper">
                                    <span className="featured__courses-dev">
                                        Web Development
                                    </span>
                                    <h3 className="featured__courses-name" >
                                        Build a Website with HTML, CSS, and Github/Gitlab
                                    </h3>
                                    <Link className='featured__courses-more'>
                                        <span>
                                            READ MORE
                                        </span>
                                        <BsArrowRight className='icon'/>
                                    </Link>
                                </div>
                            </div>
                        </Link>
                        
                        <Link className="featured__courses-link" data-aos="fade-up">
                            <div className="featured__courses-item"  title='Create REST APIs with Django/Flask'>
                                <div className="featured__courses-image">
                                    <img src="./assets/images/popularCourses/back-end-app-with-javascript.jpg" alt="" className="featured__courses-img" />
                                </div>
                                <div className="featured__courses-wrapper">
                                    <span className="featured__courses-dev">
                                        Web Development
                                    </span>
                                    <h3 className="featured__courses-name">
                                        Create REST APIs with Django/Flask
                                    </h3>
                                    <Link className='featured__courses-more'>
                                        <span>
                                            READ MORE
                                        </span>
                                        <BsArrowRight className='icon'/>
                                    </Link>
                                </div>
                            </div>
                        </Link>

                        <Link className="featured__courses-link" data-aos="fade-up">
                            <div className="featured__courses-item" title='Build a Machine Learning Model with Python'>
                                <div className="featured__courses-image">
                                    <img src="./assets/images/popularCourses/build-python-web-apps-with-django.png" alt="" className="featured__courses-img" />
                                </div>
                                <div className="featured__courses-wrapper">
                                    <span className="featured__courses-dev">
                                        Web Development
                                    </span>
                                    <h3 className="featured__courses-name" >
                                        Build a Machine Learning Model with Python
                                    </h3>
                                    <Link className='featured__courses-more'>
                                        <span>
                                            READ MORE
                                        </span>
                                        <BsArrowRight className='icon'/>
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <button className='btn btn-all-courses' data-aos="fade-up">Explore all courses</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedCourses