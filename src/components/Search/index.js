import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const Search = ({onChange, onSubmit, draft}) => {
    return (
        <div className="search">
            <input placeholder="Szukaj..." className="searchinput" type='text' value={draft} onChange={onChange}/>
            <button className="buttoninput" onClick = {onSubmit} ><FontAwesomeIcon color="white" icon={faTrashAlt} /></button>
        </div>
    )   
}

export default Search;