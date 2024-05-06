import {rerenderEntireThree} from "../Render/rerender";

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

export let state: StateType = {
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
        newPostText: 'new post'
    },
    SideBar: {
        friends: [
            {id: 1, friendName: 'Gena', age: 20},
            {id: 2, friendName: 'Alla', age: 12},
            {id: 3, friendName: 'Katya', age: 54},
            {id: 4, friendName: 'Marina', age: 33},
            {id: 5, friendName: 'Valera', age: 55},
        ]
    }
}


// создадим функцию с помощью которой получаем текст сообщения поста.
// у функции 1 параметр - newPostMessage - например. это будет сообщение новое
// внутри эта функция добавляет сообщение в posts новый объект который мы же и создаем.
// далее импортим функцию в index и потом прокидываем ее через пропсы дальше в app в profile =>
// My posts и в нем вызываем эту функцию в функции addPost
export const addMessage = () => {
    let newMessage = {id: 12, message: state.ProfilePage.newPostText, likesCount: 0}
    state.ProfilePage.posts.push(newMessage);
    state.ProfilePage.newPostText = ''
    rerenderEntireThree(state);
}

//  в ProfilePage добавить новый объект newPostText: 'new post' ,
// затем его нужно прокинуть в app => profile => myposts

//создать функцию updateNewPostText приходит одно значение newText - который к нам приходит.
// внутри функции находим в стейте значение newPostText и приравниваем ему значение newText
// дальше перерисовываем все дерево. rerenderEntireThree(state)
// ее далее прокидываем вниз через пропсы в MyPosts и вызываем ее в onPostChange
export  const updateNewPostText = (newText: string) => {
    state.ProfilePage.newPostText = newText
    rerenderEntireThree(state)
}
