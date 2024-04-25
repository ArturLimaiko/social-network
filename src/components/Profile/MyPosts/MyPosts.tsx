import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {postsType} from "../../../Redux/state";

export type MyPostPropsType = {
    posts: postsType[]
}

export const MyPosts:React.FC<MyPostPropsType> = ({posts}) => {
    const postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
    let refElement = React.createRef<HTMLTextAreaElement> ()

    const callBack = () => {
        let text = refElement.current?.value
        alert(text)
    }


    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <textarea ref={refElement} > </textarea>
            </div>
            <div>
                <button onClick={callBack}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    );
};