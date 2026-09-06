import React, { useState } from 'react';
import { Link } from 'react-router'
import './galleryItem.css'

const GalleryItem = ({item, darkMode }) => {
    
    return(
        <div className = 'galleryItem' style = {{gridRowEnd: `span ${Math.ceil(item.height/100)}`}}> 
            <img src={item.media} alt='' />
            <Link to={`/pin/${item.id}`} className="overlay"/>
            <button className={`saveButton ${darkMode ? 'dark-mode' : ''}`}>Save</button>
            <div className={`overlayButtons ${darkMode ? 'dark-mode' : ''}`}>
                <button>
                    < img src="/general/share.svg" alt=""/>    
                </button>
                <button>
                    < img src="/general/more.svg" alt=""/>    
                </button>
            </div>
        </div>
    )
}

export default GalleryItem