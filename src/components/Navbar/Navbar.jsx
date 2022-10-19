import React from 'react'
import { NavLink as Link } from "react-router-dom"

import './Navbar.css'

const Navbar = () => {
  return (
      <nav className='nav'>
        <div className='nav_logo_container'>
            <Link to='/' className="nav_logo">SUMMER JADE</Link>
        </div>
        <ul className='nav_list'>
            
          <li>
            <Link to='/' className={({ isActive }) => isActive? "active": ''} end>HOME</Link>
          </li>
          <li>
            <Link to='about' className={({ isActive }) => isActive? "active": ''}>ABOUT ME</Link>
          </li>
          <li>
            <Link to='portfolio' className={({ isActive }) => isActive? "active": ''}>PORTFOLIO</Link>
          </li>
          <li>
            <Link to='contact' className={({ isActive }) => isActive? "active": ''}>CONTACT ME</Link>
          </li>
          <li>
            <Link to='resume' className={({ isActive }) => isActive? "active": ''}>RESUME</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar