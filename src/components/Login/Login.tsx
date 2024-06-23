import React from "react";
import s from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/formsControls/formsControls";
import { requiredField } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import { AppRootStateType } from "../../redux/redux-store";

const LoginForm: React.FC = (props: any) => {
  return (
    <form className={s.loginForm} onSubmit={props.handleSubmit}>
      <Field
        type="text"
        placeholder="Email"
        name="email"
        component={Input}
        validate={[requiredField]}
      />
      <Field
        type="password"
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

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login: React.FC<any> = props => {
  const onSubmit = (formData: any) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state: AppRootStateType) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
