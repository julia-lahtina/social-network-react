import * as React from 'react';
import { UserType } from '../../redux/users_reducer';
import s from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'
import { UsersPagePropsType } from './UsersContainer';


export class Users extends React.Component<UsersPagePropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items);
            });
    }


    render() {

        return (
            <div>
                {this.props.users.map((u: UserType) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}
                                alt="olga" />
                        </div>
                        <div>
                            {u.followed && <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>}
                            {!u.followed && <button onClick={() => {
                                this.props.follow(u.id)
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
}