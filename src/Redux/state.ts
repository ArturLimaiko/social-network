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

    // updateNewPostText: (newText: string) => void
    // addMessage: () => void

    dispatch : (action: ActionsTypes ) => void
}

export type ActionsTypes = AddMessageActionType | updateNewPostTextActionType

//создадим типы для каждого action
export type AddMessageActionType = {
    type : 'ADD-POST', newPostText: string
}
export type updateNewPostTextActionType = {
    type : 'UPDATE-NEW-POST-TEXT', newText: string
}

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
            ]
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
    getState () {
        return this._state
    },

    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // addMessage() {
    //     let newMessage = {id: 12, message: this._state.ProfilePage.newPostText, likesCount: 0}
    //     this._state.ProfilePage.posts.push(newMessage);
    //     this._state.ProfilePage.newPostText = '';
    //     this._callSubscriber();
    // },
    // updateNewPostText(newText: string) {
    //     this._state.ProfilePage.newPostText = newText
    //     this._callSubscriber()
    // },

    // 1 введем тут метод dispatch() {}
    // 2 закинем в dispatch  updateNewPostText и addMessage
    // 3 передать в () объект action
    // 4 в index перекинуть dispatch ={action.store.bind(store)}
     dispatch (action) {
        if(action.type === 'ADD-POST') {
            let newMessage = {id: 12, message: action.newPostText, likesCount: 0}
            this._state.ProfilePage.posts.push(newMessage);
            this._state.ProfilePage.newPostText = '';
            this._callSubscriber();
        } else if ( action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.ProfilePage.newPostText = action.newText
            this._callSubscriber()
        }
     }

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
