import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppRootStateType } from "../../redux/redux-store";
import { getUserProfile, setUserProfile } from "../../redux/profile_reducer";
import { ProfilePageType } from "../../redux/store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

// types
type PathParamsType = {
  userId: string;
};
export type MapStateToPropsType = {
  profile: ProfilePageType;
  isAuth: boolean;
};
type MapDispatchToPropsType = {
  setUserProfile: (profile: ProfilePageType) => void;
  getUserProfile: (userId: string) => void;
};

export type ProfilePagePropsType = MapStateToPropsType & MapDispatchToPropsType;
type PropsType = RouteComponentProps<PathParamsType> & ProfilePagePropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = String(2);
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
  profile: state.profilePage,
  isAuth: state.auth.isAuth,
});
export default compose<React.ComponentType>(
  connect(mapStateToProps, { setUserProfile, getUserProfile }),
  withRouter
  //WithAuthRedirect
)(ProfileContainer);
