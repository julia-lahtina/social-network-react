const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type UsersPropsType = {
    users: UserType[]
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
    users: [] as UserType[]
}
export const usersReducer = (state: UsersPropsType = initialState, action: ActionsTypes): UsersPropsType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users] // склеиваем два массива, тот что был уже и тот что пришел с сервера
            }
        default:
            return state
    }
}

type ActionsTypes = followACType | unfollowACType | setUsersType

type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersType = ReturnType<typeof setUsersAC>
export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export const setUsersAC = (users: UserType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}


