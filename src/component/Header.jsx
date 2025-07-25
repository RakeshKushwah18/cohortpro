import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <h1 className='text-4xl font-extrabold'><span className='text-violet-600 '><b>B</b>r</span>and</h1>
        <nav>
        <a href="./">Home</a>
        <a href="./about">About</a>
        <a href="./Servvices">Services</a>
        <a href="./contact">Contact</a>
      </nav>
    </div>
  )
}

export default Header