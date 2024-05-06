import React from 'react';
import ReactDOM from 'react-dom';
import App from "../App";
import {addMessage, StateType} from "../Redux/state";


export const rerenderEntireThree = (state: StateType) => {
    ReactDOM.render(<App state={state} addMessage={addMessage}/>, document.getElementById('root'));
};



//создадим файлик render tsx.
// внутри будет функция rerenderEntireThree которая будет отрисоывать все что ниже ,
// внутри в параметрах принимает state.
