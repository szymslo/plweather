import React from 'react'
import '../index.css'

const City = props => {
    return (
        <div className="city">
            <h3>{props.name}</h3>
            <p>{props.temperature}</p>
        </div>
    )
}

export default City;