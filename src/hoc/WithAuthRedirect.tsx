import React from "react";
import { Redirect } from "react-router-dom";

export const WithAuthRedirect = (Component: any) => {
  const RedirectComponent = (props: any) => {
    if (!props.isAuth) return <Redirect to={"login"} />;

    return <Component {...props} />;
  };

  return RedirectComponent;
};
