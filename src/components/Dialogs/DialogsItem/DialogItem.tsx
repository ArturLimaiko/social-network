import React from "react";
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

export const DialogItem = ({name, id}: DialogItemType) => {
    return (
        <div className={s.dialogsItems}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
            </div>
        </div>
    )
}