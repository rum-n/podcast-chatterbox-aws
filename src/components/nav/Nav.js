import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import logo from './../../assets/logo.png';
// import { useAppContext } from "../../libs/contextLib";

const Nav = () => {
    // const { userHasAuthenticated } = useAppContext();

    // function handleLogout() {
    //     userHasAuthenticated(false);
    // }
    
    return (
        <header>
            <NavLink to='/'>
                <div className='logo'>
                    <img src={logo} alt='Logo'/>
                </div>
            </NavLink>
            <nav>
                <ul className='menu'>
                    <li><NavLink className='main-blue' to='/hosts'>For Hosts</NavLink></li>
                    <li><NavLink className='main-blue' to='/guests'>For Guests</NavLink></li>
                    <li><NavLink className='main-blue' to='/main'>List of Guests</NavLink></li>
                    {/* <li><NavLink className='main-blue' to='/login'>Login</NavLink></li>
                    <li><NavLink className='main-blue' to='/signup'>Join Now</NavLink></li> */}
                    {/* <li><button className='logout-btn main-blue' onClick={handleLogout}>Logout</button></li> */}
                </ul>
            </nav>         
        </header>
    )
};

export default Nav;