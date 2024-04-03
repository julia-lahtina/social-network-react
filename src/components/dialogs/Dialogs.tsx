import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {
    addMessageActionCreator,
    DialogPageType,
    MessageDialogsType,
    updateNewMessageTextActionCreator
} from '../../redux/state';


export const Dialogs = (props: DialogPageType & MessageDialogsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)


    let onMessageClick = () => {
        props.dispatch(addMessageActionCreator(props.newMessageText))
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageText = e.currentTarget.value;
        props.dispatch(updateNewMessageTextActionCreator(newMessageText))
    }

    return (
        <>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>

                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            <textarea onChange={onMessageChange} value={props.newMessageText}/>
            <button onClick={onMessageClick}>send message</button>
        </>
    );
};
