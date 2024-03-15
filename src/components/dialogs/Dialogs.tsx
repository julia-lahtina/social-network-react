import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


type DialogItemPropsType = {
    name: string
    id: number
}
export const DialogItem = ({name, id}: DialogItemPropsType) => {
    return (
        <div className={s.active}>
            <NavLink to={`/dialogs/\`${id}\``}>{name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}
export const Message = ({message}: MessagePropsType) => {
    return (
        <div className={s.message}>{message}</div>
    )
}


export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Viktor'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yoohoo'},
        {id: 4, message: 'Yoohoo'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    );
};
