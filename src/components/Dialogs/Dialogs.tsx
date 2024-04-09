import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Messages} from "./Messages/Messages";

export const Dialogs = () => {


    let DialogsData = [
        {name: 'Valera', id: 1},
        {name: 'Tamara', id: 2},
        {name: 'Asya', id: 3},
        {name: 'Katya', id: 4},
        {name: 'Kolya', id: 5},
        {name: 'Maks', id: 6}
    ]

    let messages = [
        {message: 'How are You?'},
        {message:'What you doing in wednesday?' },
        {message: 'How are You?'},
        {message: 'What you doing in wednesday'},
        {message: 'What are you doing?'},
        {message: 'How are You??'},

    ]

    const dialogsElements = DialogsData.map( d => <DialogItem name={d.name} id={d.id}/>)

    const messagesElements = messages.map( m => <Messages message={m.message}/>
    )

    return (
        <>
            <h3>Dialogs</h3>
            <div className={s.dialogs__wrapper}>
                <div className={s.dialogs}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </>
    )
}