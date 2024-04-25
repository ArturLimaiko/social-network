import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../Redux/state";

type ProfilePropsType ={
    posts: postsType[]
}

export const Profile:React.FC<ProfilePropsType> = ({posts}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};