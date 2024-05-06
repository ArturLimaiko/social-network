import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../Redux/state";

type ProfilePropsType = {
    posts: postsType[]
    addMessage: (newPostMessage: string) => void
    updateNewPostText: (newText: string) => void
}

export const Profile: React.FC<ProfilePropsType> = ({posts, addMessage,updateNewPostText}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} addMessage={addMessage} updateNewPostText={updateNewPostText}/>
        </div>
    );
};