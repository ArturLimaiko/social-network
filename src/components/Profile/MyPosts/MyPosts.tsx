import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {

    const PostData = [
        {message: 'Hi , how are you?', likesCount: 20},
        {message: 'Its my first post', likesCount: 54},
        {message: 'Its my first post', likesCount: 54},
        {message: 'Its my first post', likesCount: 54}
    ]

    const postsElements = PostData.map((p => <Post message={p.message} likesCount={p.likesCount}/>))

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <textarea> </textarea>
            </div>
            <div>
                <button>button</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    );
};