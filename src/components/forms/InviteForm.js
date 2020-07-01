import React from "react";
import { reduxForm, Field } from "redux-form";
import { renderField } from "../../_helpers/renderField";

const InviteForm = () => {
  return (
    <form>
      <Field
        name="emailId"
        component={renderField}
        placeholder="email"
        type="text"
      />
    </form>
  );
};
const validate = (formValues) => {
  const errors = {};
  if (formValues.email) {
    errors.email = "Enter Email";
  }
  if (formValues.mobileNumber) {
    errors.mobileNumber = "Enter mobileNumber";
  }
};
export default reduxForm({
  form: "invite_form",
  validate,
})(InviteForm);
