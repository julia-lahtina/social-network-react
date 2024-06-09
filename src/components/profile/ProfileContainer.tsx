import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppRootStateType } from "../../redux/redux-store";
import {
  getUserProfile,
  setUserProfile,
  getUserStatus,
  updateUserStatus,
} from "../../redux/profile_reducer";
import { ProfilePageType } from "../../redux/store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";

// types
type PathParamsType = {
  userId: string;
};
export type MapStateToPropsType = {
  profile: ProfilePageType;
  isAuth: boolean;
  status: string;
};
type MapDispatchToPropsType = {
  setUserProfile: (profile: ProfilePageType) => void;
  getUserProfile: (userId: string) => void;
  getUserStatus: (userId: string) => void;
  updateUserStatus: (status: string) => void;
};

export type ProfilePagePropsType = MapStateToPropsType & MapDispatchToPropsType;
type PropsType = RouteComponentProps<PathParamsType> & ProfilePagePropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = String(31007);
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateUserStatus}
      />
    );
  }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
  profile: state.profilePage,
  isAuth: state.auth.isAuth,
  status: state.profilePage.profile.status,
});
export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    setUserProfile,
    getUserProfile,
    getUserStatus,
    updateUserStatus,
  }),
  withRouter
  //WithAuthRedirect
)(ProfileContainer);
