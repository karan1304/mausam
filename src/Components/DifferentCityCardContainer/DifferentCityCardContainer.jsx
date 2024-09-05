import React from 'react'
import './DifferentCityCardContainer.css'
import DifferentCityCard from '../DiiferentCityCard/DifferentCityCard';

const DifferentCityCardContainer = ({data}) => {
  return (
    <div className="differentCityCardContainer">

      {
       data.map((obj , index)=>(<DifferentCityCard key={index}city_name={obj.name} image={`https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`} city_temp={`${Math.floor(obj.main.temp)}°`} desc={obj.weather[0].description}/>)
      )}
        
    </div>
  )
}

export default DifferentCityCardContainer