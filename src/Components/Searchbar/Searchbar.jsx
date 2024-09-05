import React, { useRef, useState } from 'react'
import './Searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Searchbar = ({city , setCity , handleSearch}) => {
  
 
  return (
    <div className="searchBar">
        
        <input type="text" placeholder='Search states' value={city} onChange={(e)=>setCity(e.target.value)}/>
        <button onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass} className='custom-magnifying-glass'/></button>
    </div>
  )
}

export default Searchbar