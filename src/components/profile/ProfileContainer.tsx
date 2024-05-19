import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import { AppRootStateType } from "../../redux/redux-store";
import { setUserProfile } from "../../redux/profile_reducer";
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
}

export type ProfilePagePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePagePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = String(2);
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                this.props.setUserProfile(res.data);
            });
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

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent)