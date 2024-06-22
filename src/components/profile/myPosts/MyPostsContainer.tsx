import { addPostActionCreator } from "../../../redux/profile_reducer";
import { MyPosts } from "./MyPosts";
import { AppRootStateType } from "../../../redux/redux-store";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { PostType } from "../../../redux/store";

type MapStateToPropsType = {
  posts: PostType[];
  newPostText: string;
};

type MapDispatchToPropsType = {
  addPost: (newPostText: string) => void;
};

export type MyPostsPagePropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addPost: (newPostText: string) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
