import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {sideBarReducer} from "./SideBarReducer";

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    sideBarReducer: sideBarReducer
})

let store = createStore(reducers)