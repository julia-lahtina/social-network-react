import React from "react";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPostsContainer } from "./myPosts/MyPostsContainer";
import { MapStateToPropsType } from "./ProfileContainer";

export const Profile = (props: MapStateToPropsType) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} isAuth={props.isAuth} />
      <MyPostsContainer />
    </div>
  );
};
