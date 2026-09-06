import './userButton.css'
import { useState } from 'react';

const UserButton = ({ darkMode }) => {

    const[open, setOpen] = useState(false);

    // temp
    const curentUser = true;


    return curentUser ? (
        <div className="userButton">
            <img className='avatar' src ="/general/avatar.png" alt=""/>
            <img 
            onClick={() => setOpen((prev) => !prev)} 
            src ="/general/arrow.svg" 
            alt=""
            className="arrow"
            />
            {open && (<div className={`userOptions ${darkMode ? 'dark-mode' : ''}`}>
                <div className='userOption'>Profile</div>
                <div className='userOption'>Settings</div>
                <div className='userOption'>Logout</div>
            </div>
            )}
        </div>
    ) : (<a href='/' className="loginLink">
        Login / Sign Up
        </a>
    )
}

export default UserButton