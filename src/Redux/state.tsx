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
export type friendsType ={
    id: number
    friendName: string
}
export type DialogsPageType = {
    dialogs: dialogsType[]
    message: messageType[]
}
export type ProfilePageType = {
    posts: postsType[]
}
type SideBarType = {
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
        ]
    },
    SideBar: {
        friends: [
            {id:1, friendName: 'Gena'},
            {id:2, friendName: 'Alla'},
            {id:3, friendName: 'Katya'},
            {id:4, friendName: 'Marina'},
            {id:5, friendName: 'Valera'},
        ]
    }
}