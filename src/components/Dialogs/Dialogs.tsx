import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Messages} from "./Messages/Messages";

export const Dialogs = () => {
    return (
        <>
            <h3>Dialogs</h3>
            <div className={s.dialogs__wrapper}>
                <div className={s.dialogs}>
                    <DialogItem name={'Valera'} id={1}/>
                    <DialogItem name={'Tamara'} id={2}/>
                    <DialogItem name={'Asya'} id={3}/>
                    <DialogItem name={'Katya'} id={4}/>
                    <DialogItem name={'Kolya'} id={5}/>
                    <DialogItem name={'Maks'} id={6}/>
                </div>
                <div className={s.messages}>
                    <Messages message={'Hi'}/>
                    <Messages message={'How are You?'}/>
                    <Messages message={'What you doing in wednesday?'}/>
                    <Messages message={'How are You?'}/>
                    <Messages message={'What you doing in wednesday'}/>
                    <Messages message={'Hi'}/>
                </div>
            </div>
        </>
    )
}