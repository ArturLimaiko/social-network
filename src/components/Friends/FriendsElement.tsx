import React from 'react';
import {friendsType} from "../../Redux/state";
import s from "./Friends.module.css";

export type FriendsElement = {
    friends: friendsType[]
}

export const FriendsElement: React.FC<FriendsElement> = ({friends}) => {
    return (
        <ul className={s.friends__list}>
            {friends.map((f, index) => {
                return (
                    <li key={index} className={s.friends__item}>
                        <img className={s.friends__avatar}
                             src={'https://banner2.cleanpng.com/20181130/zlz/kisspng-portable-network-graphics-avatar-computer-icons-im-ui-icon-icon-5c0174b58a31f3.0460868615435992855661.jpg'}
                             width={'40px'} height={'40px'} alt={f.friendName}/>
                        <h4 className={s.friends__name}> Name : {f.friendName}</h4>
                        <span className={s.friends__age}> Age : {f.age}</span>
                    </li>
                )
            })}
        </ul>
    );
};