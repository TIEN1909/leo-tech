import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from 'react-icons/ai'
import './nextPages.css'
function NextPages() {
  return (
    <div className='next__pages'>
        <div className="next__pages-container">
            <Link className='next__pages-link'><AiOutlineDoubleLeft/></Link>
            <Link className='next__pages-link'>1</Link>
            <Link className='next__pages-link'>2</Link>
            <Link className='next__pages-link'>3</Link>
            <Link className='next__pages-link'><AiOutlineDoubleRight/></Link>
        </div>
    </div>
  )
}

export default NextPages