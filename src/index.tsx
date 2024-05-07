import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from "./App";
import {store} from "./Redux/state";

let _callSubscriber = () => {

    ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

_callSubscriber();

store.subscribe(_callSubscriber);


// переносим обратно в index.tsx все( export удалить)
// стейт внутри параметров тоже удаляем, т.к стейт импортим из redux/state
// в state tsx создадим функцию subscribe() {}  в нее передадим 1 параметр observer
// subscribe импортим в index и внутрь него кладем rerenderEntireThree ( передаем колбек в стейт)
// в state будем ее использовать
//внутри subscribe функцию rerenderEntireThree = observer (приравниваем к функции)