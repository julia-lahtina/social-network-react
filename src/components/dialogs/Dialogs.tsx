import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {DialogPageType} from '../../redux/state';


export const Dialogs = (props: DialogPageType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)


    let sendMessageRef = React.createRef<HTMLTextAreaElement>()
    let sendMessage = () => {
        alert(sendMessageRef.current?.value)

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
            <textarea ref={sendMessageRef}/>
            <button onClick={sendMessage}>send message</button>
        </>
    );
};
