import {ChangeEvent} from "react";
import {actionTypes} from "redux-form";

export type dialogsType = {
    name: string
    id: number
}
export type messageType = {
    id: number
    message: string
}
export type postsType = {
    id: number
    message: string
    likesCount: number
}
export type friendsType = {
    id: number
    friendName: string
    age: number
}
export type DialogsPageType = {
    dialogs: dialogsType[]
    message: messageType[]
    newMessageBody: string
}
export type ProfilePageType = {
    posts: postsType[]
    newPostText: string
}
export type SideBarType = {
    friends: friendsType[]
}
export type StateType = {
    DialogsPage: DialogsPageType
    ProfilePage: ProfilePageType
    SideBar: SideBarType
}

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void

    subscribe: (observer: () => void) => void
    getState: () => StateType

    dispatch: (action: ActionsTypes) => void
}

//создадим типы для каждого action - тип создаем автоматически, говорим определи возвращаемое значение функции и ее тип
export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>

export let store: StoreType = {
    _state: {
        DialogsPage: {
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
        },
        ProfilePage: {
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
        },
        SideBar: {
            friends: [
                {id: 1, friendName: 'Gena', age: 20},
                {id: 2, friendName: 'Alla', age: 12},
                {id: 3, friendName: 'Katya', age: 54},
                {id: 4, friendName: 'Marina', age: 33},
                {id: 5, friendName: 'Valera', age: 55},
            ]
        },
    },
    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newMessage = {id: 12, message: this._state.ProfilePage.newPostText, likesCount: 0}
            this._state.ProfilePage.posts.push(newMessage);
            this._state.ProfilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.ProfilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.DialogsPage.newMessageBody = action.body
            this._callSubscriber()
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.DialogsPage.newMessageBody
            this._state.DialogsPage.newMessageBody = ''
            this._state.DialogsPage.message.push({id: 7, message: body})
            this._callSubscriber()
        }
    }
}

export const addPostActionCreator = () => {
    return {type: 'ADD-POST'} as const // говорим что воспринимай этот весь объект как константу
}
export const updateNewMessageBodyCreator = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return {type: 'UPDATE-NEW-MESSAGE-BODY',body: e.currentTarget.value} as const
}
export const sendMessageCreator = () => {
    return {type: 'SEND-MESSAGE'} as const
}
export const updateNewPostTextActionCreator = (event: ChangeEvent<HTMLTextAreaElement>) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: event.currentTarget.value} as const
}


//lesson 37 store-state
// создаем переменную store и в нее кладем весь наш стейст state( state будет являться свойством),
//  так же state делаем приватным _state
// rerenderEntireThree,addMessage,updateNewPostText сделаем методом  store
// не забудем написать export store,в index экспортнем store + поправим типизацию в компоненте App
// напряму вот так нельзя обращаться - <App state={store._state} потому что он является приватный метод стора , к нему
// по правилам нельзя так обращаться. для этого создадим спец метод который будет возвращать нам state
// getState() { return _state} и в App вместо state={store._state} пишем state={store.getState()}
// + там где метод подсвечивает ошибку нужно заменить на return this._state ( ругается потому что такое переменной нет,
// так как _state это свойство объекта (либо методу) store, и к свойству мы должны обращаться через this
// на этом примере нужно везде добавить this.
// заменим имя функции rerenderEntireThree на _callSubscriber
// далее => в addMessage={store.addMessage} у нас упадет ошибка , нам нужно забиндить этот метод методом .bind(store)
// так же проделать с другой функцией

// lesson 40
// 1 создаем  в DialogsPage  объект который содержит строку newMessageBody: ''
// 2 идем в dispatch создаем новый action типа 'UPDATE-NEW-MESSAGE-BODY'
// 3 добавляем через if else
// 4 далее у этого this._state.DialogsPage.newMessageBody  = action.body // тут говорим что теперь ты равен тому что придет из вне вместе с этим action
// 5 теперь по скольку state изменился об этом кто то должен знать и мы таким образом - вызываем this._callSubscriber = (this._state);
// _callSubscriber вызываем и сообщаем об изменившимся state
// 6 'UPDATE-NEW-MESSAGE-BODY' это только пользователь вводит сообщение . далее он говорит отправить и нам поступает еще 1 action type 'SEND-MESSAGE'
// 7 создаем его SEND-MESSAGE и внутри условия мы должны взять то что записано в  this._state.DialogsPage.newMessageBody
// 8 присвоим отдельную переменную let body = this._state.DialogsPage.newMessageBody
// 9 затем this._state.DialogsPage.newMessageBody = '' зануляем
// 10 потом push'им в массив message  - this._state.DialogsPage.message.push({id: 7, message: body'},)
// 11 снова вызываем и сообщаем об изменениях this._callSubscriber = (this._state);
// 12 создаем ActionCreator sendMessageCreator и updateNewMessageBodyCreator
// export const sendMessageCreator = () => { type : 'SEND-MESSAGE'}
// export const updateNewMessageBodyCreator = (body) => { type : 'UPDATE-NEW-MESSAGE-BODY', body: body}
// 13 теперь нам осталось отреагировать на эти изменения с помощью компоненты
// 14 перейдем в Dialogs рядом с messagesElements создаем дивку , добавляем textarea и баттон
// textarea добавим value={} что бы зафиксировать
// создадим переменную newMessageBody внутри компоненты dialogs и присвоим ей  значение из state.DialogsPage.newMessageBody
// создадим функцию колбек onSendMessageClick ее
// newMessageBody отдадим в value - но что бы newMessageBody менялось , нам нужно добавить событие onChange
// 15 внутри добавим еще  onChange ={тут передаем функцию onSendMessageChange}
// onSendMessageChange функция которая которая принимает   event и внутри пишем let body = currentTarger.value
// далее store.dispatch(updateNewMessageBodyCreator(body))
// dispatch в функцию callBackAddMessage  sendMessageCreator()
