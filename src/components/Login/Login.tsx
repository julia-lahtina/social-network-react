import React from "react";
import s from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/formsControls/formsControls";
import { requiredField } from "../../utils/validators/validators";

export const LoginForm: React.FC = (props: any) => {
  return (
    <form className={s.loginForm} onSubmit={props.handleSubmit}>
      <Field
        type="text"
        placeholder="Login"
        name="login"
        component={Input}
        validate={[requiredField]}
      />
      <Field
        type="text"
        placeholder="Password"
        name="password"
        component={Input}
        validate={[requiredField]}
      />
      <div>
        <Field type="checkbox" name="rememberMe" component={Input} />
        Remember me
      </div>
      <button>Login</button>
    </form>
  );
};

export const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export const Login: React.FC<any> = props => {
  const onSubmit = (formData: any) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
