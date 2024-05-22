import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import { follow, setCurrentPage, setUsers, unfollow, UserType, setTotalUsersCount, toggleIsFetching, toggleIsFetchingLoading } from '../../redux/users_reducer';
import React from 'react';
import { Users } from './Users';
import { Preloader } from '../common/preloader/Preloader';
import { api } from '../../api/api';



type mapStateToPropsType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFetchingLoading: (isFetching: boolean, userId: number) => void
}



export type UsersPagePropsType = mapStateToPropsType & mapDispatchToPropsType



export class UsersContainer extends React.Component<UsersPagePropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        api.getUsers(this.props.currentPage, this.props.pageSize)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        api.getUsers(pageNumber, this.props.pageSize)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items);
            });
    }

    render() {

        return <div>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                users={this.props.users}
                follow={this.props.follow}
                setCurrentPage={this.props.setCurrentPage}
                setTotalUsersCount={this.props.setTotalUsersCount}
                setUsers={this.props.setUsers}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching}
                toggleIsFetching={this.props.toggleIsFetching}
                followingInProgress={this.props.followingInProgress}
                toggleIsFetchingLoading={this.props.toggleIsFetchingLoading}
            />
        </div>
    }
}


const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

/* const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
} */

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFetchingLoading })(UsersContainer);