import React from 'react';
import c from './Navbar.module.css'
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <div className={c.navbar}>
            <ul className={c.menu}>
                <li><NavLink to="/profile" activeClassName={c.active}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={c.active}>Messages</NavLink></li>
                <li><NavLink to="/news" activeClassName={c.active}>News</NavLink></li>
                <li><NavLink to="/music" activeClassName={c.active}>Music</NavLink></li>
                <li><NavLink to="/settings" activeClassName={c.active}>Settings</NavLink></li>
                <li><NavLink to="/users" activeClassName={c.active}>Users</NavLink></li>
            </ul>
        </div>
    )
}
export default Navbar;