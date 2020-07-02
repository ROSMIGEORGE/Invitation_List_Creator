import React from "react";
import { connect } from "react-redux";
import LoginForm from "./forms/LoginForm";
import { authenticate, reset } from "../actions";

const Login = (props) => {
  const onSubmit = (formValues) => {
    props.reset();
    props.authenticate(formValues);
  };
  return (
    <div>
      <LoginForm onSubmit={onSubmit} errormsg={props.auth.error} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { authenticate, reset })(Login);
