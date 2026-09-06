import React, { useState } from 'react';
import UserButton from '../userButton/userButton'
import './topBar.css'

const TopBar = ({ darkMode }) => {
    return(
        <div className = 'topBar'>
            {/* search*/}
            <div className={`search ${darkMode ? 'dark-mode' : ''}`}>
                <img src = "/general/search.svg" alt = "search icon" />
                <input type="text" placeholder='Search'/>
            </div>
            {/* user*/}
            <UserButton darkMode={darkMode} />
        </div>
    )
}

export default TopBar