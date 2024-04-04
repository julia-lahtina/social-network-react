import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {DialogPageType, MessageDialogsType} from '../../redux/state';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs_reducer';


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
                    <div>
                        <textarea onChange={onMessageChange} value={props.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={onMessageClick}>send message</button>
                    </div>
                </div>
            </div>
        </>
    );
};
