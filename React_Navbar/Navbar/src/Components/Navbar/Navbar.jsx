import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_light from '../../assets/search-w.png'
import search_dark from '../../assets/search-b.png'
import toogle_dark from '../../assets/day.png'
import toogle_light from '../../assets/night.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo_light} alt='' className=''/>
      <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Features</li>
          <li>About</li>
      </ul>

      <div className='searchbox'>
        <input type='text' placeholder='search'></input>
        <img src={search_dark} alt=''/>
      </div>

      <img src={toogle_dark} alt='' className='toggle-icon'/>
    </div>
  )
}

export default Navbar
