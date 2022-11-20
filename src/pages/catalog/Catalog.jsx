import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import NavBar from '../../components/navbar/NavBar'
import CareerPaths from '../../components/careerPaths/CareerPaths'
import Courses from '../../components/courses/Courses'
import NextPages from '../../components/nextPages/NextPages'
import Footer from '../../components/footer/Footer'
import ScrollToTop from "react-scroll-to-top";
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../../components/blog/blog.css'
import '../../components/catalog/catalog.css'
function Catalog() {
  useEffect( ()=>{
    Aos.init({duration: 2000})
  })
  return (
    <div >
       <Header/>
        <Hero/>
        <div className="catalog blog">
            <div className="container">
              <div className="catalog__container ">
                  <NavBar/>
                <div className="blog">
                  <CareerPaths />
                  <Courses/>
                  <NextPages/>
                </div>
              </div>
              </div>
        </div>
        <ScrollToTop smooth color="blue"/>
        
        <Footer/>
    </div>
  )
}

export default Catalog