import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
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
                <Post message={'Hi , how are you?'} likesCount={20}/>
                <Post message={'Its my first post'} likesCount={35}/>
            </div>

        </div>
    );
};