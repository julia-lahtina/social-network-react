const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

type UsersPropsType = {
    users: UserType[]
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

type LocationType = {
    city: string
    country: string
}

const initialState: UsersPropsType = {
    users: [
        {
            id: 1,
            photoUrl: 'https://dbrizhatyuk.github.io/author/dmitry-brizhatyuk/avatar_hu81b683c0ced02b8de400cae5e86a8c01_9488_270x270_fill_q90_lanczos_center.jpg',
            followed: true,
            fullName: 'Dmitry',
            status: 'I\'m a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://de.inksearch.co/_next/image?url=https%3A%2F%2Finks.inksearch.co%2Favatars%2Fthumb%2Fxtg7EOZhHmXStbHWFcw7UpwiMNhvdB9rwCPjpJba.jpeg&w=3840&q=75',
            followed: true,
            fullName: 'Igor',
            status: 'I\'m a boss too',
            location: {city: 'Omsk', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://i.pinimg.com/200x/aa/53/fc/aa53fc520da9eef53a71b2e4e46d8502.jpg',
            followed: false,
            fullName: 'Olga',
            status: 'I\'m a boss too',
            location: {city: 'Berlin', country: 'German'}
        },
    ]
}
export const usersReducer = (state: UsersPropsType = initialState, action: ActionsTypes): UsersPropsType => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: {...state.users, ...action.users} // склеиваем два массива, тот что был уже и тот что пришел с сервера
            }
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


