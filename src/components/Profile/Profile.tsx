import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, postsType} from "../../Redux/store";

type ProfilePropsType = {
    posts: postsType[]
    dispatch:( action: ActionsTypes) => void
    newPostText: string
}

export const Profile: React.FC<ProfilePropsType> = ({posts,dispatch,newPostText}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispatch={dispatch} posts={posts} newPostText={newPostText} />
        </div>
    );
};