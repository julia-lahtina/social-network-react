import * as React from 'react';
import { UserType } from '../../redux/users_reducer';
import { UsersPagePropsType } from './UsersContainer';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { api } from '../../api/api';



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
                {pages.map((p: number, index) => {
                    return <span key={index} className={props.currentPage === p ? s.selectedPage : ''} onClick={() => props.onPageChanged(p)}>{p}</span>
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
                        {u.followed
                            ? <button
                                onClick={() => {
                                    props.toggleIsFetchingLoading(true, u.id)
                                    api.unfollow(u.id)
                                        .then(res => {
                                            if (res.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleIsFetchingLoading(false, u.id)
                                        })
                                }}
                                disabled={props.followingInProgress.some((id: number) => id === u.id)}
                            >Unfollow</button>
                            :

                            <button
                                onClick={() => {
                                    props.toggleIsFetchingLoading(true, u.id)
                                    api.follow(u.id)
                                        .then(res => {
                                            if (res.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleIsFetchingLoading(false, u.id)
                                        })
                                }}
                                disabled={props.followingInProgress.some((id: number) => id === u.id)}
                            >Follow</button>
                        }


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
