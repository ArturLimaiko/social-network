import {ActionsTypes, DialogsPageType} from "./state";
import {ChangeEvent} from "react";


export const dialogsReducer = (_state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let body = _state.newMessageBody
            _state.newMessageBody = ''
            _state.message.push({id: 7, message: body})
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



