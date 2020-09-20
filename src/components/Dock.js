import React from 'react';
import '../index.css'
import City from './City'

const Dock = props => {

    let data = props.data.map( (dat, i) => {
        return <City 
            key={i}
            name={dat.stacja}
            temperature={dat.temperatura} />
    })

    return (
        <div className="dock">
            {data}
        </div>
    )
}

export default Dock;

