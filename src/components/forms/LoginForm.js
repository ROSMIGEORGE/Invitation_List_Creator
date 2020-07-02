import React, { useState, useEffect } from "react";
import { reduxForm, Field, Form } from "redux-form";
import { CircularProgress } from "@material-ui/core";
import { renderField } from "../../_helpers/renderField";

//login form
const LoginForm = (props) => {
  const [submitText, setSubmitText] = useState("Submit");

  useEffect(() => {
    if (props.errormsg) setSubmitText("Submit");
  }, [props.errormsg]);

  const onSubmit = (formValues) => {
    setSubmitText(<CircularProgress />);
    props.onSubmit(formValues);
  };

  return (
    <Form className="login-form" onSubmit={props.handleSubmit(onSubmit)}>
      <Field
        name="username"
        component={renderField}
        placeholder="username"
        type="text"
        autoComplete="off"
      />
      <Field
        name="password"
        component={renderField}
        placeholder="password"
        type="password"
        autoComplete="off"
      />
      <button type="submit">{submitText}</button>
      {props.errormsg ? <div className="error">{props.errormsg}</div> : null}
    </Form>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.username) {
    errors.username = "Enter username";
  }
  if (!formValues.password) {
    errors.password = "Enter password";
  }
  return errors;
};
export default reduxForm({
  form: "loginForm",
  validate,
})(LoginForm);
