// export type MessagesType = {
//     id: number
//     message: string
// }
//
// export type DialogsType = {
//     name: string
//     id: number
// }
//
// export type PostType = {
//     id: number
//     message: string
//     likesCount: number
// }
//
// export type messagesPageType = {
//     messages: MessagesType[]
// }
//
// export type profilePageType = {
//     posts: PostType[]
//     dialogs: DialogsType[]
// }
//
// export type StateType = {
//     profilePage: profilePageType
//     messagesPage: messagesPageType
// }

export const State = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi , how are you?', likesCount: 20},
            {id: 2, message: 'Its my first post', likesCount: 54},
            {id: 3, message: 'Its my first post', likesCount: 54},
            {id: 4, message: 'Its my first post', likesCount: 54}
        ],
        dialogs: [
            {name: 'Valera', id: 1},
            {name: 'Tamara', id: 2},
            {name: 'Asya', id: 3},
            {name: 'Katya', id: 4},
            {name: 'Kolya', id: 5},
            {name: 'Maks', id: 6}
        ]
    },
    messagesPage: {
        messages: [
            {id: 1, message: 'How are You?'},
            {id: 2, message: 'What you doing in wednesday?'},
            {id: 3, message: 'How are You?'},
            {id: 4, message: 'What you doing in wednesday'},
            {id: 5, message: 'What are you doing?'},
            {id: 6, message: 'How are You??'},

        ]
    }
}