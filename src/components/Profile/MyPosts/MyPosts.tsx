import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {postsType} from "../../../Redux/state";


type MyPostPropsType = {
    posts: postsType[]
}

export const MyPosts:React.FC<MyPostPropsType> = ({posts}) => {
    const postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <textarea> </textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    );
};