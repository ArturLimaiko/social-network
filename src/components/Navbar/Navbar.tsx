import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Friends} from "../Friends/Friends";
import {friendsType} from "../../Redux/store";

type NavbarType = {
    friends: friendsType[]
}

export const Navbar: React.FC<NavbarType> = ({friends}) => {

    const getClassName = (isActive: boolean) => {
        return isActive ? s.nav__activeLink : s.nav__item
    }

    return (
        <nav className={s.nav}>
            <li className={s.nav__list}>
                {/*NavLink - используются что бы происходила смена в браузере url без перезагрузки страницы*/}
                <NavLink to={'/profile'}>Profile</NavLink>
            </li>

            <li className={s.nav__list}>
                <NavLink to={'/dialogs'}>Messages</NavLink>
            </li>

            <li className={s.nav__list}>
                <NavLink to={'/news'}>News</NavLink>
            </li>

            <li className={s.nav__list}>
                <NavLink to={'/music'}>Music</NavLink>
            </li>

            <li className={s.nav__list}>
                <NavLink to={'/settings'}>Settings</NavLink>
            </li>

            <li className={s.nav__list}>
                <Friends friends={friends}/>
            </li>


            {/*<li className={s.nav__list}>*/}
            {/*    <NavLink to={'/profile'} className={({isActive}) => getClassName(isActive)}>Profile</NavLink>*/}
            {/*</li>*/}

            {/*<li className={s.nav__list}>*/}
            {/*    <NavLink to={'/dialogs'} className={({isActive}) => getClassName(isActive)}>Messages</NavLink>*/}
            {/*</li>*/}

            {/*<li className={s.nav__list}>*/}
            {/*    <NavLink to={'/news'} className={({isActive}) => getClassName(isActive)}>News</NavLink>*/}
            {/*</li>*/}

            {/*<li className={s.nav__list}>*/}
            {/*    <NavLink to={'/music'} className={({isActive}) => getClassName(isActive)}>Music</NavLink>*/}
            {/*</li>*/}

            {/*<li className={s.nav__list}>*/}
            {/*    <NavLink to={'/settings'} className={({isActive}) => getClassName(isActive)}>Settings</NavLink>*/}
            {/*</li>*/}
        </nav>
    );
};