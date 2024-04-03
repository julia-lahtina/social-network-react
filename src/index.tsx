import './index.css';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {RootStateType} from './redux/state'


export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                profilePage={state.profilePage}
                dialogsPage={state.dialogsPage}
                sidebar={state.sidebar}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
    ;
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)

