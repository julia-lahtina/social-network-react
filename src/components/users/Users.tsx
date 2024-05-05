import * as React from 'react';
import {UsersPropsType, UserType} from '../../redux/users_reducer';
import s from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'
import {UsersPagePropsType} from './UsersContainer';


export const Users = (props: UsersPagePropsType) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                props.setUsers(res.data.items);
            });
    }

    if (!Array.isArray(props.users)) {
        return <div>No users found.</div>;
    }

    return (

        <div>
            {props.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} alt="olga"/>
                    </div>
                    <div>
                        {u.followed && <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>}
                        {!u.followed && <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};