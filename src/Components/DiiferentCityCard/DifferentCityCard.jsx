import React from 'react'
import './DifferentCityCard.css'


const DifferentCityCard = ({city_name , image , city_temp , desc}) => {
  return (
    <div className='cityCard'>
        <h1>{city_name}</h1>
        <img src={image} alt="" />
        <p className='city_temp'>{city_temp}</p>
        <p className='desc'>{desc}</p>
    </div>
  )
}

export default DifferentCityCard