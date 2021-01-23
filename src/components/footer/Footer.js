import React from 'react'
import './footer.css'
import logo from '../../assets/logo_small.png'
const Footer = () => {
    return (
        <div className='footer'>
            <img src={logo} alt='logo'/>
            <div className='developer-info'>
                <p>An Open Source Initiative By Ishita</p>
                <div className='dev-profile'>
                    <a target="__blank" href="https://www.linkedin.com/in/ishita-kabra-3b305818b/"><img alt="linkedin" src="https://img.icons8.com/fluent/48/000000/linkedin.png"/></a>
                    <a target="__blank" href="https://github.com/ishita1805"><img alt="github" src="https://img.icons8.com/bubbles/50/000000/github.png"/></a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
