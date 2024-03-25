import React from 'react';
import s from '../Profile.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div>main content</div>
            <div>
                <img className={s.img}
                    src='https://ru-wotp.lesta.ru/dcont/fb/image/moon_rose_light.jpg'/>
            </div>
            <div className={s.description}> ava + description</div>
        </div>
    );
};