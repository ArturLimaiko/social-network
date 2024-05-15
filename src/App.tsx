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
import {StoreType} from "./Redux/state";

export type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = ({store}: PropsType) => {
    const state = store.getState();
    return (
        // BrowserRouter - компонент который контролит страницы(переход по ссылкам) . по этому оборачиваем все им
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar friends={state.SideBar.friends}/>
                <div className='app-wrapper-content'>
                    {/*Route следит за страницей например dialogs,profile и тд*/}
                    <Route path='/dialogs' render={() => <Dialogs dialogs={state.DialogsPage.dialogs}
                                                                  message={state.DialogsPage.message}/>}/>
                    <Route path='/profile'
                           render={() => <Profile
                               dispatch={store.dispatch.bind(store)}
                               posts={state.ProfilePage.posts}
                           />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
