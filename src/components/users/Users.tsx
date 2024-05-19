import * as React from 'react';
import { UserType } from '../../redux/users_reducer';
import { UsersPagePropsType } from './UsersContainer';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';


type onPageChangedType = {
    onPageChanged: (pageNumber: number) => void
}

export const Users = (props: UsersPagePropsType & onPageChangedType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((p: number) => {
                    return <span className={props.currentPage === p ? s.selectedPage : ''} onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
            </div>
            {props.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}
                                alt="user_photo" />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed && <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>}
                        {!u.followed && <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
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
}
