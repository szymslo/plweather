import React from 'react'
import './index.scss'

const dateTime = (hour, date) => {
    return date + ' ' + hour+':00';
}

const City = props => {

    return (
        <div className="city">
            <h2>{props.name}</h2>
            {props.temperature > 35 &&
                <span className="very_hot">{props.temperature}°C</span>}
            {props.temperature > 30 && props.temperature <=35 &&
                <span className="hot">{props.temperature}°</span>}
            {props.temperature > 25 && props.temperature <=30 &&
                <span className="warm">{props.temperature}°C</span>}
            {props.temperature > 20 && props.temperature <=25 &&
                <span className="low_warm">{props.temperature}°C</span>}
            {props.temperature > 15 && props.temperature <=20 &&
                <span className="mild">{props.temperature}°C</span>}
            {props.temperature > 10 && props.temperature <=15 &&
                <span className="low_mild">{props.temperature}°C</span>}
            {props.temperature > 5 && props.temperature <=10 &&
                <span className="cool">{props.temperature}°C</span>}
            {props.temperature > 0 && props.temperature <=5 &&
                <span className="low_cool">{props.temperature}°C</span>}
            {props.temperature > -5 && props.temperature <=0 &&
                <span className="cold">{props.temperature}°C</span>}
            {props.temperature > -10 && props.temperature <=-5 &&
                <span className="low_cold">{props.temperature}°C</span>}
            {props.temperature > -15 && props.temperature <=-10 &&
                <span className="freeze">{props.temperature}°C</span>}
            {props.temperature > -20 && props.temperature <=-15 &&
                <span className="low_freeze">{props.temperature}°C</span>}
            {props.temperature < -20 &&
                <span className="frost">{props.temperature}°C</span>}
            <p>{props.humidity} %</p>
            <p>{props.pressure} hPa</p>
            <p>{props.wind} m/s</p>
            <p className="rain">{props.prec} mm</p>
            <h6>{dateTime(props.time, props.date)}</h6>
        </div>
    )
}

export default City;