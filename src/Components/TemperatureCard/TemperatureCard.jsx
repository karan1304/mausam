import React from 'react'
import './TemperatureCard.css';

const TemperatureCard = ({mainData , cityname , country , image}) => {
  return (
    <div className="temperatureCard">

        <div className="temperatureDetails">
            <strong>{Math.floor(mainData.temp)}°</strong>
            <img src={`https://openweathermap.org/img/wn/${image}@2x.png`} alt="" />
        </div>

       <p className='current-location'>
        {cityname},{country}
       </p>

    </div>
  )
}

export default TemperatureCard