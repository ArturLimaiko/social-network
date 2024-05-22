import {ActionsTypes, StateType} from "./state";

export type sideBarReducerType = {
    _state: StateType
    action: ActionsTypes
}

export const sideBarReducer = ({_state, action}: sideBarReducerType) => {


    return _state
}