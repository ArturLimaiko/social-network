import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let dialogs = [
    {name: 'Valera', id: 1},
    {name: 'Tamara', id: 2},
    {name: 'Asya', id: 3},
    {name: 'Katya', id: 4},
    {name: 'Kolya', id: 5},
    {name: 'Maks', id: 6}
]

let message = [
    {id: 1, message: 'How are You?'},
    {id: 2, message: 'What you doing in wednesday?'},
    {id: 3, message: 'How are You?'},
    {id: 4, message: 'What you doing in wednesday'},
    {id: 5, message: 'What are you doing?'},
    {id: 6, message: 'How are You??'},
]


let posts = [
    {id: 1, message: 'Hi , how are you?', likesCount: 20},
    {id: 2, message: 'Its my first post', likesCount: 54},
    {id: 3, message: 'Its my first post', likesCount: 54},
    {id: 4, message: 'Its my first post43', likesCount: 524},
    {id: 5, message: 'Its my first post1', likesCount: 22},
    {id: 6, message: 'Its my first post2', likesCount: 32},
    {id: 7, message: 'Its my first post3', likesCount: 15},
    {id: 8, message: 'Its my first post4', likesCount: 982},
]


ReactDOM.render(
    <App posts={posts} message={message} dialogs={dialogs}/>,
    document.getElementById('root')
);