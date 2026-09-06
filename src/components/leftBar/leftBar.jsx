import React, { useState } from 'react';
import './leftBar.css'

const LeftBar = ({ toggleDarkMode }) => {
    const [glow, setGlow] = useState(false);
    const [active, setActive] = useState(false);

    const handleLogoClick = () => {
        setGlow(!glow);
        toggleDarkMode();  

        setActive(true);
        setTimeout(() => setActive(false), 200);
    };

    const [isSpinning, setIsSpinning] = useState(false);

    const handleClick = () => {
        setIsSpinning(true);
        setTimeout(() => setIsSpinning(false), 500);
    };

    return(
        <div className = 'leftBar'>
            <div className = 'menuIcons'>
                <a onClick={handleLogoClick}>
                <img className={`logo ${glow ? 'glow' : ''} ${active ? 'active' : ''}`} src='/general/logo.png' alt='logo' />
                </a>
                <a href='/'>
                    <img src = "/general/home.svg" alt="" />
                </a>
                <a href='/'>
                    <img src = "/general/create.svg" alt="" />
                </a>
                <a href='/'>
                    <img src = "/general/updates.svg" alt="" />
                </a>
                <a href='/'>
                    <img src = "/general/messages.svg" alt="" />
                </a>
            </div>
            <a onClick={handleClick}>
                    <img className={`menuIcon ${isSpinning ? "isSpinning" : ""}`} src = "/general/settings.png" alt="" />
            </a>
        </div>
    )
}

export default LeftBar