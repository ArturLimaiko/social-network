import {ProfilePageType, ActionsTypes} from "./store";
import {ChangeEvent} from "react";

let initialState = {
    posts: [
        {id: 1, message: 'Hi , how are you?', likesCount: 20},
        {id: 2, message: 'Its my first post', likesCount: 54},
        {id: 3, message: 'Its my first post', likesCount: 54},
        {id: 4, message: 'Its my first post43', likesCount: 524},
        {id: 5, message: 'Its my first post1', likesCount: 22},
        {id: 6, message: 'Its my first post2', likesCount: 32},
        {id: 7, message: 'Its my first post3', likesCount: 15},
        {id: 8, message: 'Its my first post4', likesCount: 982},
    ],
    newPostText: ''
}

export const profileReducer = (_state = initialState, action:ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST' : {
            let newMessage = {id: 12, message: _state.newPostText, likesCount: 0}
            _state.posts.push(newMessage);
            _state.newPostText = '';
            return _state
        }
        case 'UPDATE-NEW-POST-TEXT' : {
            _state.newPostText = action.newText
            return _state
        }
        default:
            return _state
    }
}

export const addPostActionCreator = () => {
    return {type: 'ADD-POST'} as const // говорим что воспринимай этот весь объект как константу
}
export const updateNewPostTextActionCreator = (event: ChangeEvent<HTMLTextAreaElement>) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: event.currentTarget.value} as const
}