import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsTypes, postsType, addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state";

export type MyPostPropsType = {
    posts: postsType[]
    dispatch:(action: ActionsTypes) => void
    newPostText: string
    // addPostActionCreator: () => void
    // updateNewPostTextActionCreator: (event: ChangeEvent<HTMLTextAreaElement>)=> void
}

// 1 создадим функцию addPostActionCreator которая будет возвращать return { action type: 'ADD-POST'}
// 2 создадим функцию updateNewPostTextActionCreator которая будет возвращать {action type: 'UPDATE-NEW-POST-TEXT'}
// 3 не забудем в параметры передать текс который приходит к нам
// 4 перенести обе функции в state и export и имортируем их сюда же
// 5 создать константы ADD_POST И UPDATE_NEW_POST_TEXT и присвоить им соответствующие названия
export const MyPosts: React.FC<MyPostPropsType> = ({posts,dispatch,newPostText}) => {
    const postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
    //refElement создается с помощью React.createRef<HTMLTextAreaElement>(). Это создает объект ссылки, который может быть использован для получения доступа к DOM-узлу элемента <textarea>, на который ссылается этот ref.
    // refElement.current является способом доступа к реальному DOM-узлу, на который ссылается ваша ссылка (refElement). Когда компонент, содержащий этот ref, монтируется в DOM, React автоматически связывает созданный ref с соответствующим DOM-узлом. Свойство current ref позволяет вам получить доступ к этому DOM-узлу напрямую.
    //let refElement = React.createRef<HTMLTextAreaElement>()


    const addPost = () => {
        // if (refElement.current) {
        //     let text = refElement.current.value
        //     // addMessage(text)
        //      dispatch({ type: 'ADD-POST',newPostText: text })
        // }
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