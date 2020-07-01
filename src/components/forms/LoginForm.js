import React from "react";
import { reduxForm, Field, Form } from "redux-form";
import { renderField } from "../../_helpers/renderField";

const LoginForm = (props) => {
  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };
  return (
    <Form onSubmit={props.handleSubmit(onSubmit)}>
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
      <button type="submit">submit</button>
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
