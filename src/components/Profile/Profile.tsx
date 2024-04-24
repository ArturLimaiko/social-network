import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";



export const Profile = () => {


    let posts = [
        {id: 1, message: 'Hi , how are you?', likesCount: 20},
        {id: 2, message: 'Its my first post', likesCount: 54},
        {id: 3, message: 'Its my first post', likesCount: 54},
        {id: 4, message: 'Its my first post43', likesCount: 524},
        {id: 5, message: 'Its my first post1', likesCount: 22},
        {id: 6, message: 'Its my first post2', likesCount: 32},
        {id: 7, message: 'Its my first post3', likesCount: 15},
        {id: 8, message: 'Its my first post4', likesCount: 982},
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};