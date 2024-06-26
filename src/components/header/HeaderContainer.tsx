import React from "react";
import { Header } from "./Header";
import {
  getAuthUserData,
  initialStateType,
  logout,
  setAuthUserData,
} from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { AppRootStateType } from "../../redux/redux-store";

// types
export type MapStateToProps = {
  isAuth: boolean;
  login: string | null;
};
type MapDispatchToProps = {
  setAuthUserData: (data: initialStateType) => void;
  authMe: () => void;
  logout: () => void;
};

type HeaderPropsType = MapStateToProps & MapDispatchToProps;

class HeaderContainer extends React.Component<any> {
  componentDidMount() {
    this.props.authMe();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: AppRootStateType): MapStateToProps => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {
  setAuthUserData,
  authMe: getAuthUserData,
  logout,
})(HeaderContainer);
