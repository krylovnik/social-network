import React from 'react';
import c from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={c.header}>
            <div className={c.logo_wrapper}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"
                    alt="logo"/>

                <div className={c.loginBlock}>
                    {props.isAuth ? props.login :
                        <NavLink to={'/login'}>Login</NavLink> }
                </div>
            </div>
        </header>
    )
}
export default Header;