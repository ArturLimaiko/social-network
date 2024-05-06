import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {postsType} from "../../../Redux/state";

export type MyPostPropsType = {
    posts: postsType[]
    addMessage: (newPostMessage: string) => void
}

export const MyPosts: React.FC<MyPostPropsType> = ({posts, addMessage}) => {
    const postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
    let refElement = React.createRef<HTMLTextAreaElement>()


    // Проверка, что refElement.current существует (не равен null или undefined).
    // Если refElement.current существует, извлекается значение (value) из текущего элемента.
    // Полученный текст передается в функцию addMessage, вероятно, для добавления сообщения или обработки этого текста.
    const callBack = () => {
        if (refElement.current) {
            let text = refElement.current.value
            addMessage(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <textarea ref={refElement}> </textarea>
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