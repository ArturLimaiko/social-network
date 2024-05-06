import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StateType} from "./Redux/state";

type Props = {
    state: StateType
    addMessage: (newPostMessage: string) => void
    updateNewPostText: (newText: string) => void
}

function App({state, addMessage,updateNewPostText}: Props) {

    return (
        // BrowserRouter - компонент который контролит страницы(переход по ссылкам) . по этому оборачиваем все им
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*Route следит за страницей например dialogs,profile и тд*/}
                    <Route path='/dialogs' render={() => <Dialogs dialogs={state.DialogsPage.dialogs}
                                                                  message={state.DialogsPage.message}/>}/>
                    <Route path='/profile'
                           render={() => <Profile posts={state.ProfilePage.posts} addMessage={addMessage} updateNewPostText={updateNewPostText} newPostText={state.ProfilePage.newPostText}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
