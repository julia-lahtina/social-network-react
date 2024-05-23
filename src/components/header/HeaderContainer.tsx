import React from 'react';
import { Header } from './Header';
import axios from 'axios';
import { initialStateType, setAuthUserData } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import { api } from '../../api/api';

// types
export type MapStateToProps = {
    isAuth: boolean
    login: string | null
}
type MapDispatchToProps = {
    setAuthUserData: (data: initialStateType) => void
}

type HeaderPropsType = MapStateToProps & MapDispatchToProps


class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        api.authMe()
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data)
                }
            })
            .catch(err => {
                console.log('error: ', err)
            })
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToProps => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
