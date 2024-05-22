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


// lesson 41
// action объект у которого есть свойство type
// reducer чистая функция которая принимает state и action если нужно применяет этот action к этому state и возвращает новый new state либо возвращает не измененный state если он не подошел
// создадим под каждый подобъект свой reducer
// 1 создать функцию таким же именем  она принимает 2 параметра state & action и возвращает state
// 2 переносим внутренности из state для каждого соответствующего action
// 3 избавимся внутри от this и ProfilePage т.к state и есть тот ProfilePage(приходит к нам под именем state)
//4  убираем callsubscriber() потому что это Reducer - его задача маленькая - получает state & action - преобразовывает и возвращает.
//  либо может не преобразовать.
// 5 export Reducer в state
// 6 в dispatch передадим новые Reducer . их вызываем и отдаем часть - то есть то что ему нужно
// например this._state.ProfilePage а вторым параметром action
// 7 далее не забудем после преобразования веток стейта редьюсером, уведомить подписчика - в конце добавляем this._callSubscriber()
// 8 преобразуем наши Reducer конструкцией switch(action.type) говорим по какому ключу мы переключаем(type) . и далее case {внутри сами кейсы например ADD-POST}
// 9 после каждого кейса пропишет return state и return по умолчанию сделать  default : return state
// 10 перенесем actionCreator к Reducer
