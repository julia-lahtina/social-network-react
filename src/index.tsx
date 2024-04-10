import './index.css';
import {AppRootStateType, store, StorePropsType} from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';


export let rerenderEntireTree = (state: AppRootStateType) => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App
                    profilePage={state.profilePage}
                    dialogsPage={state.dialogsPage}
                    sidebarPage={state.sidebarPage}
                    dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

