import React from 'react'
import './Header.css'
import Logo from '../Logo/Logo'
import Searchbar from '../Searchbar/Searchbar'

const Header = ({city , setCity , handleSearch}) => {
  return (
    <div className='header'>
        <Logo/>
        <Searchbar city={city} setCity={setCity} handleSearch={handleSearch}/>
    </div>
  )
}

export default Header