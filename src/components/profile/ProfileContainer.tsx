import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppRootStateType } from "../../redux/redux-store";
import { getProfile, setUserProfile } from "../../redux/profile_reducer";
import { ProfilePageType } from "../../redux/store";
import { RouteComponentProps, withRouter } from "react-router-dom";



// types
type PathParamsType = {
    userId: string
}
export type MapStateToPropsType = {
    profile: ProfilePageType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfilePageType) => void
    getProfile: (userId: string) => void
}

export type ProfilePagePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePagePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = String(2);
        }
        this.props.getProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage,
})


const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile, getProfile })(WithUrlDataContainerComponent)