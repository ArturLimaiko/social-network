import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {
    ActionsTypes,
    dialogsType,
    messageType,
    sendMessageCreator,
    StoreType,
    updateNewMessageBodyCreator
} from "../../Redux/state";


type DialogsPropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs: React.FC<DialogsPropsType> = ({store, dispatch}) => {
    const dialogsElements = store._state.DialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = store._state.DialogsPage.message.map(m => <Messages message={m.message}/>)
    const newMessageBody = store._state.DialogsPage.newMessageBody

    //let refMessage = React.createRef<HTMLTextAreaElement>()
    const callBackAddMessage = () => {
        // let message = refMessage.current?.value
        // alert(message)
        dispatch(sendMessageCreator())
    }
    const onSendMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageBodyCreator(e))
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
                    <div><textarea placeholder='Enter you message'
                                  value={newMessageBody}
                                  onChange={onSendMessageChange}>
                            </textarea></div>
                    <div>
                        <button onClick={callBackAddMessage}>Add Message</button>
                    </div>

                </div>
            </div>
        </>
    )
}