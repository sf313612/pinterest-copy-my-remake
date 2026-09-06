import React, { useState } from 'react';
import './app.css'
import Gallery from './components/gallery/gallery'
import LeftBar from './components/leftBar/leftBar'
import TopBar from './components/topBar/topBar'
import TramWindow from './components/tramWindow/tramWindow'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <LeftBar toggleDarkMode={toggleDarkMode} />
      <div className = "content">
      <TopBar darkMode={darkMode} />
        <Gallery/>
      </div>
    </div>
  )
}

export default App