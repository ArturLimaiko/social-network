import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, postsType} from "../../Redux/state";

type ProfilePropsType = {
    posts: postsType[]
    dispatch:( action: ActionsTypes) => void
}

export const Profile: React.FC<ProfilePropsType> = ({posts,dispatch}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispatch={dispatch} posts={posts} />
        </div>
    );
};