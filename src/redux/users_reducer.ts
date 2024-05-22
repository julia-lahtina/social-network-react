const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FETCHING_LOADING = 'TOGGLE_IS_FETCHING_LOADING';

export type UsersPropsType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: '',
    photos: {
        small: string,
        large: string
    }
    status: string
    followed: boolean
    //location: LocationType
}

type LocationType = {
    city: string
    country: string
}

const initialState: UsersPropsType = {
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
export const usersReducer = (state: UsersPropsType = initialState, action: ActionsTypes): UsersPropsType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? { ...u, followed: true } : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FETCHING_LOADING:
            return {
                ...state,
                followingInProgress:
                    action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter((id: number) => id !== action.userId)
            }
        default:
            return state
    }
}

type ActionsTypes = followACType
    | unfollowACType
    | setUsersType
    | setCurrentPageType
    | setTotalUsersCountType
    | toggleIsFetchingACType
    | toggleIsFetchingLoadingACType


type followACType = ReturnType<typeof follow>
type unfollowACType = ReturnType<typeof unfollow>
type setUsersType = ReturnType<typeof setUsers>
type setCurrentPageType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
type toggleIsFetchingLoadingACType = ReturnType<typeof toggleIsFetchingLoading>


export const follow = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsers = (users: UserType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching }) as const
export const toggleIsFetchingLoading = (isFetching: boolean, userId: number) => ({ type: TOGGLE_IS_FETCHING_LOADING, isFetching, userId }) as const



