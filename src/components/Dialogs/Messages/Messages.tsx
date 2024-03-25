import React from 'react';
import s from "../Dialogs.module.css";

type MessagesType = {
    message: string
}

export const Messages = ({message}: MessagesType) => {
    return (
        <div className={s.message}>{message}</div>
    );
};