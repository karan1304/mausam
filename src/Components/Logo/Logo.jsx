import React from 'react'
import './Logo.css';
import logo from '../../assets/logo.png'

const Logo = () => {
  return (
    <div className='logo'>
        <img src={logo} alt="" className='logo-img'/>
        <h1 className='app-name'>MAUSAM</h1>
    </div>
  )
}

export default Logo