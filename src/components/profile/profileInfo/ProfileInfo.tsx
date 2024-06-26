import React from "react";
import s from "./ProfileInfo.module.css";
import { Preloader } from "../../common/preloader/Preloader";
import { ProfileStatus } from "./ProfileStatus";

export const ProfileInfo = (props: any) => {
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
        <ProfileStatus
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
      </div>
    </>
  );
};
