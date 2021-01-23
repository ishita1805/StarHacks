import React from 'react'
import './navigation.css'
import logo from '../../assets/logo_small.png'
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
    return (
        <div className='navigation-container'>
            <div className='navigation'>
                <img src={logo} alt='logo'/>
                <div className='nav-icons'>
                    <NavLink exact to="/Account" className='nav-icon' activeClassName='nav-icon-active'>
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </NavLink>
                    <NavLink exact to="/" className='nav-icon' activeClassName='nav-icon-active'>
                        <i className="fa fa-home" aria-hidden="true"></i>
                    </NavLink>
                    <NavLink exact to="/SafeSpace" className='nav-icon' activeClassName='nav-icon-active'>
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </NavLink>
                    <NavLink exact to="/MindMonitor" className='nav-icon' activeClassName='nav-icon-active'>
                        <i class="fa fa-heartbeat"></i>
                    </NavLink>
                </div>
            </div>

            <div className='content'>
                {props.children}
            </div>
            
        </div>
    )
}

export default Navigation
