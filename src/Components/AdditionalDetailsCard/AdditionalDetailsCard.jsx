import React, { useEffect, useState } from 'react'
import './AdditionalDetailsCard.css'
import AdditionalDetails from '../AdditionalDetails/AdditionalDetails'
import temperature from '../../assets/temperature.svg'
import pressure from '../../assets/pressure.svg'
import precipitation from '../../assets/precipitation.svg'
import wind from '../../assets/wind.svg'

const AdditionalDetailsCard = ({additionalData  , winddata}) => {
    
  return (
    <div className="additionalDetailsCard">
          <AdditionalDetails img={temperature} title="Temperature" value={`${Math.floor(additionalData.temp)}° - feels like ${Math.floor(additionalData.feels_like)}°`}/>
          <AdditionalDetails img={pressure} title="Pressure" value={`${additionalData.pressure} mm of mercury column`}/>
          <AdditionalDetails img={precipitation} title="Humidity" value={`${additionalData.humidity}%`}/>
          <AdditionalDetails img={wind} title="Wind" value={`${winddata.speed}m/s`}/>
    </div>
  )
}

export default AdditionalDetailsCard