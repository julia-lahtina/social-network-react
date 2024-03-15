import React from 'react';
import s from '../Dialogs.module.css';
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
