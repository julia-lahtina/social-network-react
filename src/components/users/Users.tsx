import * as React from 'react';
import {UserType} from '../../redux/users_reducer';
import s from './Users.module.css'


export const Users = (props: any) => {
    return (
        <div>
            {props.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={u.photoUrl} alt="olga"/>
                    </div>
                    <div>
                        {u.followed && <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>}
                        {!u.followed && <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};