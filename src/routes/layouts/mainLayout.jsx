import LeftBar from '../../components/leftBar/leftBar'
import TopBar from '../../components/topBar/topBar'
import './mainLayout.css'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const MainLayout = () => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev)
    }
    return(
        <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
            <LeftBar toggleDarkMode={toggleDarkMode} />
            <div className = "content">
                <TopBar darkMode={darkMode} />
                <Outlet/>
            </div>
        </div>
    )
}

export default MainLayout