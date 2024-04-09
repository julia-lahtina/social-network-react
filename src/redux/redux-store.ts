import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile_reducer';
import {dialogsReducer} from './dialogs_reducer';
import {sidebarReducer} from './sidebar_reducer';


const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer
})

export type AppRootStateType = ReturnType<typeof rootReducers>
export const store = createStore(rootReducers);
