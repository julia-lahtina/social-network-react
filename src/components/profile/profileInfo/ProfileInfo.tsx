import React from "react";
import s from "./ProfileInfo.module.css";
import { MapStateToPropsType } from "../ProfileContainer";
import { Preloader } from "../../common/preloader/Preloader";

export const ProfileInfo = (props: MapStateToPropsType) => {
  if (!props.profile.profile) {
    return <Preloader />;
  }

  return (
    <>
      {/*             <div>
                <img
                    src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
                    alt="" />
            </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.profile.photos.large} alt="" />
        <span>About me: {props.profile.profile.aboutMe}</span>
        <span>{props.profile.profile.lookingForAJob}</span>
      </div>
    </>
  );
};
