import React from "react";
import s from "./Login.module.css";
import { Field, reduxForm } from "redux-form";

export const LoginForm: React.FC = (props: any) => {
  return (
    <form className={s.loginForm} onSubmit={props.handleSubmit}>
      <Field type="text" placeholder="Login" name="login" component={"input"} />
      <Field
        type="text"
        placeholder="Password"
        name="password"
        component={"input"}
      />
      <div>
        <Field type="checkbox" name="rememberMe" component={"input"} />
        Remember me
      </div>
      <button>Login</button>
    </form>
  );
};

export const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export const Login: React.FC = (props: any) => {
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
