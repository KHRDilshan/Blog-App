import React from 'react'
import './navbar.css';
import Logo from '../image/logo.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar' >
      <div className='nav' >
        <div className='logo'>
          <img src={Logo} alt="" />
        </div>
        <div className='links'>
          <Link className='link' to='/?cat=art'>
            <h6>ART</h6>
          </Link>
          <Link className='link' to='/?cat=science'>
            <h6>SCIENCE</h6>
          </Link>
          <Link className='link' to='/?cat=technology'>
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className='link' to='/?cat=cinema'>
            <h6>CINEMA</h6>
          </Link>
          <Link className='link' to='/?cat=design'>
            <h6>DESIGN</h6>
          </Link>
          <Link className='link' to='/?cat=food'>
            <h6>FOOD</h6>
          </Link>
          <span className='name'>Ravin</span>
          <span className='logout'>Logout</span>
          <span className='write'>
            <Link to="/write" className='link'>Write</Link>
          </span>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
