import React from 'react'
import './index.css'

const Search = ({onChange, onSubmit, draft}) => {
    return (
        <div className="search">
            <input placeholder="Szukaj..." className="searchinput" type='text' value={draft} onChange={onChange}/>
            <button className="buttoninput" onClick = {onSubmit} >X</button>
        </div>
    )   
}

export default Search;