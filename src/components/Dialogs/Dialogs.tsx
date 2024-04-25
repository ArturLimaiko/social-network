import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {dialogsType, messageType} from "../../Redux/state";

type DialogsPropsType = {
    dialogs: dialogsType[]
    message: messageType[]
}

export const Dialogs: React.FC<DialogsPropsType> = ({dialogs, message}) => {
    const dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = message.map(m => <Messages message={m.message}/>)

    let refMessage = React.createRef<HTMLTextAreaElement>()
    const callBackAddMessage = () => {
        let message = refMessage.current?.value
        alert(message)
    }

    return (
        <>
            <h3>Dialogs</h3>
            <div className={s.dialogs__wrapper}>
                <div className={s.dialogs}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div>
                        <textarea ref={refMessage}></textarea>
                    </div>
                    <button onClick={callBackAddMessage}>Add Message</button>

                </div>
            </div>
        </>
    )
}