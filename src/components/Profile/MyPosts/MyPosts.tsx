import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsTypes, postsType, addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state";

export type MyPostPropsType = {
    posts: postsType[]
    dispatch:(action: ActionsTypes) => void
    newPostText: string
}

// 1 создадим функцию addPostActionCreator которая будет возвращать return { action type: 'ADD-POST'}
// 2 создадим функцию updateNewPostTextActionCreator которая будет возвращать {action type: 'UPDATE-NEW-POST-TEXT'}
// 3 не забудем в параметры передать текс который приходит к нам
// 4 перенести обе функции в state и export и имортируем их сюда же
// 5 создать константы ADD_POST И UPDATE_NEW_POST_TEXT и присвоить им соответствующие названия
export const MyPosts: React.FC<MyPostPropsType> = ({posts,dispatch,newPostText}) => {
    const postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    const addPost = () => {
        dispatch(addPostActionCreator())
    }

    //создать функцию onPostChange которая будет следить за введенным значением в textarea
    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextActionCreator(event))
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <textarea placeholder={"My Post text"}
                          // ref={refElement}
                          onChange={onPostChange}
                          value={newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    );
};