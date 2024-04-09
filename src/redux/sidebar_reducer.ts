import {ActionsTypes, SidebarType} from './store';


const initialState: SidebarType = {
    friends: [
        {id: 1, name: 'Sveta'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Viktor'},
    ]
}
export const sidebarReducer = (state: SidebarType = initialState, action: ActionsTypes) => {
        return state
}