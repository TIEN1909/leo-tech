import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
function Header() {
    const [fix, setFix] = useState(false)
    const  setFixed = () =>{
        if(window.scrollY >= 392){
            setFix(true)
        }else {
            setFix(false)
        }
    }
    window.addEventListener('scroll',setFixed)
  return (
    <header className={fix ? 'header fixed' : 'header'} >
        <div className="header__container">
            <Link className='header__logo' to='/'>
                <img src="./assets/images/logo/leotech.png" alt="" className='header__logo-image'/>
            </Link>
            <ul className="header__menu-list">
                <li>
                    <Link className="header__menu-link" to="/" >Courses</Link>
                </li>
                <li>
                    <Link className="header__menu-link" to="/catalog">Catalog</Link>
                </li>
                <li>
                    <Link className="header__menu-link">Resources</Link>
                </li>
                <li>
                    <Link className="header__menu-link">Community</Link>
                </li>
                <li>
                    <Link className="header__menu-link">Contact Us</Link>
                </li>
            </ul>
            <button className="btn btn-donate">DONATE</button>
        </div>
    </header>
  )
}

export default Header