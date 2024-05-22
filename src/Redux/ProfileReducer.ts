import {ProfilePageType, ActionsTypes} from "./state";
import {ChangeEvent} from "react";



export const profileReducer = (_state: ProfilePageType, action:ActionsTypes) => {
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