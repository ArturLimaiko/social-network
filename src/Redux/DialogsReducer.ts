import {ActionsTypes, DialogsPageType} from "./store";
import {ChangeEvent} from "react";

let initialState = {
    dialogs: [
        {name: 'Valera', id: 1},
        {name: 'Tamara', id: 2},
        {name: 'Asya', id: 3},
        {name: 'Katya', id: 4},
        {name: 'Kolya', id: 5},
        {name: 'Maks', id: 6}
    ],
    message: [
        {id: 1, message: 'How are You?'},
        {id: 2, message: 'What you doing in wednesday?'},
        {id: 3, message: 'How are You?'},
        {id: 4, message: 'What you doing in wednesday'},
        {id: 5, message: 'What are you doing?'},
        {id: 6, message: 'How are You??'},
    ],
    newMessageBody: ''
}

export const dialogsReducer = (_state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let body = _state.newMessageBody
            _state.newMessageBody = ''
            _state.message.push({id: 6, message: body})
            return _state
        }
        case 'UPDATE-NEW-MESSAGE-BODY' : {
            _state.newMessageBody = action.body
            return _state
        }
        default:
            return _state
    }
}

export const updateNewMessageBodyCreator = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return {type: 'UPDATE-NEW-MESSAGE-BODY', body: e.currentTarget.value} as const
}
export const sendMessageCreator = () => {
    return {type: 'SEND-MESSAGE'} as const
}



