import { Post } from "./post/Post";
import s from "./MyPosts.module.css";
import { MyPostsPagePropsType } from "./MyPostsContainer";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  requiredField,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/formsControls/formsControls";

export const MyPosts = (props: MyPostsPagePropsType) => {
  let postsElements = props.posts.map(p => (
    <Post key={p.id} message={p.message} likesCounts={p.likesCount} />
  ));

  const onAddPost = (values: any) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostReduxForm onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const maxLength = maxLengthCreator(10);

export const AddNewPostForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          validate={[requiredField, maxLength]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

export const AddNewPostReduxForm = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);
