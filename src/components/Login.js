import React from "react";
import { connect } from "react-redux";
import LoginForm from "./forms/LoginForm";
import { authenticate } from "../actions";

const Login = (props) => {
  const onSubmit = (formValues) => {
    props.authenticate(formValues);
  };
  return (
    <div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { authenticate })(Login);
