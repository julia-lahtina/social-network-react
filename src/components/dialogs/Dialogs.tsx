import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


type DialogItemPropsType = {
    name: string
    id: string
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={'Dimych'} id={'1'}/>
                <DialogItem name={'Andrey'} id={'2'}/>
                <DialogItem name={'Sveta'} id={'3'}/>
                <DialogItem name={'Sasha'} id={'4'}/>
                <DialogItem name={'Viktor'} id={'5'}/>
                <DialogItem name={'Valera'} id={'6'}/>
            </div>

            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'Yoohoo'}/>
                <Message message={'Yoohoo'}/>
                <Message message={'Yoohoo'}/>
            </div>

        </div>
    );
};
