import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsTypes, postsType} from "../../../Redux/state";

export type MyPostPropsType = {
    posts: postsType[]
    dispatch:( action: ActionsTypes) => void
}

export const MyPosts: React.FC<MyPostPropsType> = ({posts,dispatch}) => {
    const postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
    let refElement = React.createRef<HTMLTextAreaElement>()


    // Проверка, что refElement.current существует (не равен null или undefined).
    // Если refElement.current существует, извлекается значение (value) из текущего элемента.
    // Полученный текст передается в функцию addMessage, вероятно, для добавления сообщения или обработки этого текста.
    const addPost = () => {
        if (refElement.current) {
            let text = refElement.current.value
            // addMessage(text)
             dispatch({ type: 'ADD-POST',newPostText: text })
        }
    }

    //создать функцию onPostChange которая будет следить за введенным значением в textarea
    const onPostChange = () => {
        if (refElement.current) {
            let text = refElement.current.value;
            //updateNewPostText(text);
            dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <textarea placeholder={"My Post text"} ref={refElement} onChange={onPostChange}/>
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