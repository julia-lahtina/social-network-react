import s from "./Dialogs.module.css";
import { DialogItem } from "./dialogItem/DialogItem";
import { Message } from "./message/Message";
import { DialogsPagePropsType } from "./DialogsContainer";
import { Redirect } from "react-router-dom";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";

export const Dialogs = (props: DialogsPagePropsType) => {
  let dialogsElements = props.dialogsPage.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map(m => (
    <Message message={m.message} />
  ));

  const addNewMessage = (values: any) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

export const AddMessageForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newMessageBody"
          placeholder={"enter your message..."}
        />
      </div>
      <div>
        <button>send message</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);
