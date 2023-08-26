import React, { useContext } from 'react';
import './Header.css'
import {ThemeContext} from '../contexts/ThemeContext';


const Header = () => {
  const {isDarkMode,toggleTheme} = useContext(ThemeContext)
  return (
    <>
    <div className={isDarkMode ?'navcontainer dark' : 'navcontainer light'}>
        <div className="logo">Wondi</div>
        <div className={isDarkMode ? "center-nav dark" : "center-nav light"}>
            <a href='#' className={isDarkMode ? 'link dark active' : 'link light active' }>Home</a>
            <a href='#' className={isDarkMode ? 'link dark' : 'link light'}>Works</a>
            <a href='#' className={isDarkMode ? 'link dark' : 'link light'}>About</a>
            <a href='#' className={isDarkMode ? 'link dark' : 'link light'}>Projects</a>
            <a href='#' className={isDarkMode ? 'link dark' : 'link light'}>Services</a>
            <label htmlFor="checkbox">
        {isDarkMode? 'Dark' :'Light'}
        <input type="checkbox"  onClick={toggleTheme}  className='Navbar-input' />
      </label>

       
        </div>
        <div className="cta">Let's chat</div>
        
    </div>
    <hr className={isDarkMode ?'divider dark' : 'divider light' }/>
    </>
  )
}

export default Header