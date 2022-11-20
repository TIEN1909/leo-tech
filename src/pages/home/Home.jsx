import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import CareerPaths from '../../components/careerPaths/CareerPaths'
import Courses from '../../components/courses/Courses'
import PopularCourses from '../../components/popularCourses/PopularCourses'
import FeaturedCourses from '../../components/featuredCourses/FeaturedCourses'
import Footer from '../../components/footer/Footer'
import '../../components/blog/blog.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ScrollToTop from "react-scroll-to-top";
function Home() {
  useEffect(()=>{
    Aos.init({duration:1000})
  })
  return (
    <div >
        <Header />
        <Hero type="hero"/>
        <div className="blog">
          <CareerPaths type="career__paths"/>
          <Courses type="courses"/>
          <PopularCourses />
          <FeaturedCourses />
        </div>
        <ScrollToTop smooth color="blue"/>
        <Footer/>
    </div>
  )
}

export default Home