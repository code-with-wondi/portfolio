import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
    <div className="navcontainer">
        <div className="logo">Wondi</div>
        <div className="center-nav">
            <a href='#' className="active">Home</a>
            <a href='#'>Works</a>
            <a href='#'>About</a>
            <a href='#'>Projects</a>
            <a href='#'>Services</a>
        </div>
        <div className="cta">Let's chat</div>
        
    </div>
    <hr className='divider' />
    </>
  )
}

export default Header