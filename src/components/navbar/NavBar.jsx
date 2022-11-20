import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
function NavBar() {
  return (
    <div className='navbar'>
        <div className="navbar__one">
            <h3 className='navbar__title'>
                Languages
            </h3>
            <ul className="navbar__list">
                <li className="navbar__item">
                    <Link className="navbar__link">
                        HTML & CSS
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link">
                        SQL
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link">
                        Python
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link">
                        JavaScript
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link">
                        PHP
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link">
                        Ruby
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link">
                        Go
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link">
                        Kotlin
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link">
                        Flutter
                    </Link>
                </li>
            </ul>
        </div>
        <div className="navbar__two">
            <h3 className='navbar__title'>
                Subjects
            </h3>
            <ul className="navbar__list">
                <li className="navbar__item">
                    <Link className="navbar__link">
                        Web Development
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link">
                        Web Design
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link">
                        Mobile Development
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link">
                        DevOps
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link">
                        AI
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link">
                        Data Analytics
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link">
                        Data Engineering
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link">
                        Data Science
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link">
                        Computer Science
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link">
                        Machine Learning
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar