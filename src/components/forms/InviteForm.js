import React, { useEffect } from "react";
import { reduxForm, Field } from "redux-form";
import { renderField } from "../../_helpers/renderField";

const InviteForm = (props) => {
  const buttonRef = React.createRef();
  useEffect(() => {
    if (props.submitForm) {
      buttonRef.current.click();
    }
  }, [props.submitForm]);

  return (
    <form
      name="inviteForm"
      className="invite-form"
      onSubmit={props.handleSubmit(props.onSubmit)}
    >
      <Field
        name="email"
        component={renderField}
        placeholder="email"
        type="text"
      />
      <Field
        name="mobile"
        component={renderField}
        placeholder="mobile number"
        type="number"
      />
      <button className="negative-btn" onClick={props.onCancel}>
        cancel
      </button>
      <button type="submit" ref={buttonRef}>
        submit
      </button>
    </form>
  );
};
const validate = (formValues) => {
  const errors = {};
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!formValues.email) {
    errors.email = "Enter Email Id";
  } else if (!emailRegex.test(formValues.email)) {
    errors.email = "Invalid Email Id";
  }
  if (!formValues.mobile) {
    errors.mobileNumber = "Enter Mobile Number";
  }
  return errors;
};
export default reduxForm({
  form: "invite_form",
  validate,
})(InviteForm);
