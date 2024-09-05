import React from 'react'
import './AdditionalDetails.css'
import temperature from '../../assets/temperature.svg'

const AdditionalDetails = ({img , title , value}) => {
  return (
    <div className="additionalDetails">
        <div className="details-img">
            <img src={img} alt="" />
        </div>
        <h1>{title}</h1>
        <p>{value}</p>
    </div>
  )
}

export default AdditionalDetails