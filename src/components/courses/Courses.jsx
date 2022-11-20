import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './courses.css'
function Courses({type}) {
  return (
    <div className={ type ? 'courses' : 'courses1'}>
        <div className="container">
            <div className="courses__container">
                {
                    type === 'courses' &&
                    <>
                        <h2 className='courses__title'>
                            Jumpstart your career with Courses
                        </h2>
                        <div className="courses__list">
                            <Link className="courses__link" data-aos="fade-up">
                                <div className="courses__item">
                                    <div className="courses__image">
                                        <img src="./assets/images/courses/learn-react.png" alt="" className="courses__img" />
                                    </div>
                                    <div className="courses__wrapper">
                                        <span className="courses__dev">
                                            Web Development
                                        </span>
                                        <h3 className="courses__name">
                                            Mastering React
                                        </h3>
                                        <Link className='courses__more'>
                                            <span>
                                                READ MORE
                                            </span>
                                            <BsArrowRight className='icon'/>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                            
                            <Link className="courses__link" data-aos="fade-up">
                                <div className="courses__item">
                                    <div className="courses__image">
                                        <img src="./assets/images/courses/learn-python.png" alt="" className="courses__img" />
                                    </div>
                                    <div className="courses__wrapper">
                                        <span className="courses__dev">
                                            Web Development
                                        </span>
                                        <h3 className="courses__name">
                                            Mastering Python
                                        </h3>
                                        <Link className='courses__more'>
                                            <span>
                                                READ MORE
                                            </span>
                                            <BsArrowRight className='icon'/>
                                        </Link>
                                    </div>
                                </div>
                            </Link>

                            <Link className="courses__link" data-aos="fade-up">
                                <div className="courses__item">
                                    <div className="courses__image">
                                        <img src="./assets/images/courses/learn-ruby.png" alt="" className="courses__img" />
                                    </div>
                                    <div className="courses__wrapper">
                                        <span className="courses__dev">
                                            Web Development
                                        </span>
                                        <h3 className="courses__name">
                                            Mastering Ruby
                                        </h3>
                                        <Link className='courses__more'>
                                            <span>
                                                READ MORE
                                            </span>
                                            <BsArrowRight className='icon'/>
                                        </Link>
                                    </div>
                                </div>
                            </Link>

                            <Link className="courses__link" data-aos="fade-up">
                                <div className="courses__item">
                                    <div className="courses__image">
                                        <img src="./assets/images/courses/learn-javascript.jpg" alt="" className="courses__img" />
                                    </div>
                                    <div className="courses__wrapper">
                                        <span className="courses__dev">
                                            Web Development
                                        </span>
                                        <h3 className="courses__name">
                                            Mastering JavaScript
                                        </h3>
                                        <Link className='courses__more'>
                                            <span>
                                                READ MORE
                                            </span>
                                            <BsArrowRight className='icon'/>
                                        </Link>
                                    </div>
                                </div>
                            </Link>

                            <Link className="courses__link" data-aos="fade-up">
                                <div className="courses__item">
                                    <div className="courses__image">
                                        <img src="./assets/images/courses/learn-nodejs.png" alt="" className="courses__img" />
                                    </div>
                                    <div className="courses__wrapper">
                                        <span className="courses__dev">
                                            Web Development
                                        </span>
                                        <h3 className="courses__name">
                                            Mastering Node.js
                                        </h3>
                                        <Link className='courses__more'>
                                            <span>
                                                READ MORE
                                            </span>
                                            <BsArrowRight className='icon'/>
                                        </Link>
                                    </div>
                                </div>
                            </Link>

                            <Link className="courses__link" data-aos="fade-up">
                                <div className="courses__item">
                                    <div className="courses__image">
                                        <img src="./assets/images/courses/learn-typescript.png" alt="" className="courses__img" />
                                    </div>
                                    <div className="courses__wrapper">
                                        <span className="courses__dev">
                                            Web Development
                                        </span>
                                        <h3 className="courses__name">
                                            Mastering TypeScript
                                        </h3>
                                        <Link className='courses__more'>
                                            <span>
                                                READ MORE
                                            </span>
                                            <BsArrowRight className='icon'/>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </>
                }
                {
                    type !== "courses" &&
                    <>
                        <h2 className='courses__title'>
                            All Courses
                        </h2>
                        <div className={type ? "courses__list" : "courses__list1"}>
                            <Link className="courses__link" data-aos="fade-up">
                                <div className="courses__item">
                                    <div className={type ? "courses__image" : "courses__image1"}>
                                        <img src="./assets/images/courses/learn-react.png" alt="" className="courses__img" />
                                    </div>
                                    <div className="courses__wrapper">
                                        <span className="courses__dev">
                                            Web Development
                                        </span>
                                        <h3 className="courses__name">
                                            Mastering React
                                        </h3>
                                        <Link className='courses__more'>
                                            <span>
                                                READ MORE
                                            </span>
                                            <BsArrowRight className='icon'/>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                            
                            <Link className="courses__link" data-aos="fade-up">
                                <div className="courses__item">
                                    <div className={type ? "courses__image" : "courses__image1"}>
                                        <img src="./assets/images/courses/learn-python.png" alt="" className="courses__img" />
                                    </div>
                                    <div className="courses__wrapper">
                                        <span className="courses__dev">
                                            Web Development
                                        </span>
                                        <h3 className="courses__name">
                                            Mastering Python
                                        </h3>
                                        <Link className='courses__more'>
                                            <span>
                                                READ MORE
                                            </span>
                                            <BsArrowRight className='icon'/>
                                        </Link>
                                    </div>
                                </div>
                            </Link>

                            <Link className="courses__link" data-aos="fade-up">
                                <div className="courses__item">
                                    <div className={type ? "courses__image" : "courses__image1"}>
                                        <img src="./assets/images/courses/learn-ruby.png" alt="" className="courses__img" />
                                    </div>
                                    <div className="courses__wrapper">
                                        <span className="courses__dev">
                                            Web Development
                                        </span>
                                        <h3 className="courses__name">
                                            Mastering Ruby
                                        </h3>
                                        <Link className='courses__more'>
                                            <span>
                                                READ MORE
                                            </span>
                                            <BsArrowRight className='icon'/>
                                        </Link>
                                    </div>
                                </div>
                            </Link>

                            <Link className="courses__link" data-aos="fade-up">
                                <div className="courses__item">
                                    <div className={type ? "courses__image" : "courses__image1"}>
                                        <img src="./assets/images/courses/learn-javascript.jpg" alt="" className="courses__img" />
                                    </div>
                                    <div className="courses__wrapper">
                                        <span className="courses__dev">
                                            Web Development
                                        </span>
                                        <h3 className="courses__name">
                                            Mastering JavaScript
                                        </h3>
                                        <Link className='courses__more'>
                                            <span>
                                                READ MORE
                                            </span>
                                            <BsArrowRight className='icon'/>
                                        </Link>
                                    </div>
                                </div>
                            </Link>

                            <Link className="courses__link" data-aos="fade-up">
                                <div className="courses__item">
                                    <div className={type ? "courses__image" : "courses__image1"}>
                                        <img src="./assets/images/courses/learn-nodejs.png" alt="" className="courses__img" />
                                    </div>
                                    <div className="courses__wrapper">
                                        <span className="courses__dev">
                                            Web Development
                                        </span>
                                        <h3 className="courses__name">
                                            Mastering Node.js
                                        </h3>
                                        <Link className='courses__more'>
                                            <span>
                                                READ MORE
                                            </span>
                                            <BsArrowRight className='icon'/>
                                        </Link>
                                    </div>
                                </div>
                            </Link>

                            <Link className="courses__link" data-aos="fade-up">
                                <div className="courses__item">
                                    <div className={type ? "courses__image" : "courses__image1"}>
                                        <img src="./assets/images/courses/learn-typescript.png" alt="" className="courses__img" />
                                    </div>
                                    <div className="courses__wrapper">
                                        <span className="courses__dev">
                                            Web Development
                                        </span>
                                        <h3 className="courses__name">
                                            Mastering TypeScript
                                        </h3>
                                        <Link className='courses__more'>
                                            <span>
                                                READ MORE
                                            </span>
                                            <BsArrowRight className='icon'/>
                                        </Link>
                                    </div>
                                </div>
                            </Link>

                            <Link className="courses__link" data-aos="fade-up">
                                <div className="courses__item">
                                    <div className={type ? "courses__image" : "courses__image1"}>
                                        <img src="./assets/images/allCourses/kotlin.png" alt="" className="courses__img" />
                                    </div>
                                    <div className="courses__wrapper">
                                        <span className="courses__dev">
                                            Web Development
                                        </span>
                                        <h3 className="courses__name">
                                            Mastering Kotlin
                                        </h3>
                                        <Link className='courses__more'>
                                            <span>
                                                READ MORE
                                            </span>
                                            <BsArrowRight className='icon'/>
                                        </Link>
                                    </div>
                                </div>
                            </Link>

                            <Link className="courses__link" data-aos="fade-up">
                                <div className="courses__item">
                                    <div className={type ? "courses__image" : "courses__image1"}>
                                        <img src="./assets/images/allCourses/react-native.png" alt="" className="courses__img" />
                                    </div>
                                    <div className="courses__wrapper">
                                        <span className="courses__dev">
                                            Web Development
                                        </span>
                                        <h3 className="courses__name">
                                            Mastering React Native
                                        </h3>
                                        <Link className='courses__more'>
                                            <span>
                                                READ MORE
                                            </span>
                                            <BsArrowRight className='icon'/>
                                        </Link>
                                    </div>
                                </div>
                            </Link>

                            <Link className="courses__link" data-aos="fade-up">
                                <div className="courses__item">
                                    <div className={type ? "courses__image" : "courses__image1"}>
                                        <img src="./assets/images/allCourses/flutter.png" alt="" className="courses__img" />
                                    </div>
                                    <div className="courses__wrapper">
                                        <span className="courses__dev">
                                            Web Development
                                        </span>
                                        <h3 className="courses__name">
                                            Mastering Flutter
                                        </h3>
                                        <Link className='courses__more'>
                                            <span>
                                                READ MORE
                                            </span>
                                            <BsArrowRight className='icon'/>
                                        </Link>
                                    </div>
                                </div>
                            </Link>

                            <Link className="courses__link" data-aos="fade-up">
                                <div className="courses__item">
                                    <div className={type ? "courses__image" : "courses__image1"}>
                                        <img src="./assets/images/allCourses/sql.jpg" alt="" className="courses__img" />
                                    </div>
                                    <div className="courses__wrapper">
                                        <span className="courses__dev">
                                            Web Development
                                        </span>
                                        <h3 className="courses__name">
                                            Mastering SQL
                                        </h3>
                                        <Link className='courses__more'>
                                            <span>
                                                READ MORE
                                            </span>
                                            <BsArrowRight className='icon'/>
                                        </Link>
                                    </div>
                                </div>
                            </Link>

                            <Link className="courses__link" data-aos="fade-up">
                                <div className="courses__item">
                                    <div className={type ? "courses__image" : "courses__image1"}>
                                        <img src="./assets/images/allCourses/go.png" alt="" className="courses__img" />
                                    </div>
                                    <div className="courses__wrapper">
                                        <span className="courses__dev">
                                            Web Development
                                        </span>
                                        <h3 className="courses__name">
                                            Mastering Go
                                        </h3>
                                        <Link className='courses__more'>
                                            <span>
                                                READ MORE
                                            </span>
                                            <BsArrowRight className='icon'/>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </>
                }
            </div>
        </div>
    </div>
  )
}

export default Courses