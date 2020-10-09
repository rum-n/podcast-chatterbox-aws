import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import logo from './../../assets/logo.png';
import { AmplifySignOut } from '@aws-amplify/ui-react';

const MainNav = () => {
    
    return (
        <header>
            <NavLink to='/main'>
                <div className='logo'>
                    <img src={logo} alt='Logo'/>
                </div>
            </NavLink>
            <nav>
                <ul className='menu'>
                    <li><AmplifySignOut/></li>
                </ul>
            </nav>         
        </header>
    )
};

export default MainNav;