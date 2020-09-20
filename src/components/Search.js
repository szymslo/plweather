import React from 'react'
import '../index.css'

const Search = ({onChange, onSubmit, draft}) => {
    return (
        <div className="search">
            <input type='text' value={draft} onChange={onChange}/>
            <button onClick = {onSubmit} >Wyczyść</button>
        </div>
    )   
}

export default Search;