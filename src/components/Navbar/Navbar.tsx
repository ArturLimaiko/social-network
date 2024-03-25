import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {

    const getClassName = (isActive: boolean) => {
        return isActive ? s.nav__activeLink : s.nav__item
    }

    return (
        <nav className={s.nav}>
            <li className={s.nav__list}>
                <NavLink to={'/profile'} className={({isActive})=> getClassName(isActive) }>Profile</NavLink>
            </li>

            <li className={s.nav__list}>
                <NavLink to={'/dialogs'} className={({isActive}) => getClassName(isActive)}>Messages</NavLink>
            </li>

            <li className={s.nav__list}>
                <NavLink to={'/news'} className={({isActive}) => getClassName(isActive)}>News</NavLink>
            </li>

            <li className={s.nav__list} >
                <NavLink to={'/music'} className={({isActive}) => getClassName(isActive)}>Music</NavLink>
            </li>

            <li className={s.nav__list}>
                <NavLink to={'/settings'} className={({isActive}) => getClassName(isActive)}>Settings</NavLink>
            </li>

        </nav>
    );
};