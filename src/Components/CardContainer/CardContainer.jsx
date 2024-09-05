import React from 'react'
import './CardContainer.css'
import TemperatureCard from '../TemperatureCard/TemperatureCard'
import AdditionalDetailsCard from '../AdditionalDetailsCard/AdditionalDetailsCard'

const CardContainer = ({data}) => {
  return (
    <div className="cardContainer">
        <TemperatureCard mainData={data.main} cityname={data.name} country={data.sys.country} image={data.weather[0].icon}/>
        <AdditionalDetailsCard additionalData={data.main} winddata={data.wind}/>
    </div>
  )
}

export default CardContainer