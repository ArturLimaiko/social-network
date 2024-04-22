import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {State} from "./components/Redux/State";
//1 отсюда вынесем отдельный файл state, это будет объект с массивами.
// его прокинем в index tsx. а далее через пропсы в другие кеомпоненты
//2 разбить state на подобъекты
//3 протипизировать стейт
//4 создать блок слева под settings - блок Friends, и так же добавить его в state - sitebar как отдельную ветку



ReactDOM.render(
    <App state={State}/>,
    document.getElementById('root')
);