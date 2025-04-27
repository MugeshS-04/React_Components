import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_light from '../../assets/search-w.png'
import search_dark from '../../assets/search-b.png'
import toogle_dark from '../../assets/day.png'
import toogle_light from '../../assets/night.png'
import { useState } from 'react'

const Navbar = ({theme, settheme}) => {
  const toggle_mode = () => {
    if(theme === 'light')
    {
      settheme("dark");
    }
    else{
      settheme("light");
    }
  }
  return (
    <div className='navbar'>
      <img src={theme === "light" ? logo_light : logo_dark } alt='' className='logo'/>
      <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Features</li>
          <li>About</li>
      </ul>

      <div className='searchbox'>
        <input type='text' placeholder='search'></input>
        <img src={theme === "light" ? search_light : search_dark } alt=''/>
      </div>

      <img onClick={() => {toggle_mode()}}src={theme === "light" ? toogle_light : toogle_dark} alt='' className='toggle-icon'/>
    </div>
  )
}

export default Navbar
