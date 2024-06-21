import { applyMiddleware, combineReducers, createStore } from "redux";
import { profileReducer } from "./profile_reducer";
import { dialogsReducer } from "./dialogs_reducer";
import { sidebarReducer } from "./sidebar_reducer";
import { usersReducer } from "./users_reducer";
import { authReducer } from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

const rootReducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducers>;
export const store = createStore(rootReducers, applyMiddleware(thunk));
