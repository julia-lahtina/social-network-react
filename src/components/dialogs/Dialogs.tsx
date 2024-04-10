import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {DialogsPagePropsType} from './DialogsContainer';


export const Dialogs = (props: DialogsPagePropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)


    let onMessageClick = () => {
        props.sendMessage()
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageText = e.currentTarget.value;
        props.updateNewMessageBody(newMessageText)
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
                        <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText} placeholder={'enter your message...'}/>
                    </div>
                    <div>
                        <button onClick={onMessageClick}>send message</button>
                    </div>
                </div>
            </div>
        </>
    );
};
