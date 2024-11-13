import React from 'react'
import "../stylesheets/header.css"

const Header = () => {
  return (
    <div className='header'>
      <div>
        <img src="http://inatms.s3-website-us-east-1.amazonaws.com/assets/img/ina-logo.png" alt="logo" />
      </div>
      <div className='links'>
        <p>Home</p>
        <p>contact</p>
      </div>
      <div>
        <button>Log-in</button>
      </div>
    </div>
  )
}

export default Header
