import React from 'react'
import './index.sass'

const City = props => {
    return (
        <div className="city">
            <h3>{props.name}</h3>
            <p>{props.temperature}°C</p>
            <p>{props.humidity} %</p>
            <p>{props.pressure} hPa</p>
            <p>{props.wind} Km/h</p>
            <p>{props.prec} mm</p>
        </div>
    )
}

export default City;