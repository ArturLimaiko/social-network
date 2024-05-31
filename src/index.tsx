import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from "./App";
import {store} from "./Redux/store";

let _callSubscriber = () => {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

store.subscribe(_callSubscriber);
_callSubscriber();
