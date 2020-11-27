import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

const Search = ({onChange, onSubmit, toggleView, draft}) => {

    return ( 
        <div className="search">
            <button className="tomap" onClick={toggleView}><FontAwesomeIcon color="white" icon={faMapMarkedAlt} /></button>
            <input placeholder="Szukaj..." className="searchinput" type='text' value={draft} onChange={onChange}/>
            <button className="delete" onClick = {onSubmit} ><FontAwesomeIcon color="white" icon={faTrashAlt} /></button>
        </div>
    )   
}

export default Search;