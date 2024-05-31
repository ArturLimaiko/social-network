import React from 'react';
import s from './Friends.module.css';
import {FriendsElement} from "./FriendsElement";
import {friendsType} from "../../Redux/store";

export type FriendsPropsType = {
    friends: friendsType[]
}

export const Friends:React.FC <FriendsPropsType> = ({friends}) => {
    return (
        <div className={s.friends__wrapp}>
            <h3 className={s.friends__title}>My Friends</h3>
                <FriendsElement friends={friends}/>
        </div>
    );
};