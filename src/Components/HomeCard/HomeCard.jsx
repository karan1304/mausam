import React from 'react'
import './HomeCard.css'
import weathersearch from '../../assets/weathersearch.gif'

const HomeCard = () => {
  return (
    <div className='homecard'>
        <div className='image-container'>
            <img src={weathersearch} alt="" />
        </div>
        <h1>Search Weather</h1>
    </div>
  )
}

export default HomeCard