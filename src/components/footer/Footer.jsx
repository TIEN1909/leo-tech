import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import './footer.css'
function Footer() {
  return (
    <footer className='footer'>
        <div className="footer__container">
            <div className="footer__link">
                <Link>
                    Privacy
                </Link>
                <Link>
                    Terms of Use
                </Link>
            </div>
            <span className="footer__cpr">
                © 2022 LEO TECH VIET NAM CO.,LTD. All Rights Reserved.
            </span>
            <div className="footer__social">
                <FaFacebookF/>
                <BsTwitter/>
                <FaLinkedinIn/>
            </div>
        </div>
    </footer>
  )
}

export default Footer