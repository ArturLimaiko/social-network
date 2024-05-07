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