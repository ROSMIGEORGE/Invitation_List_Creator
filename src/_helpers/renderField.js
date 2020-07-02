import React from "react";

//helper function to render form fields
const renderError = ({ touched, error }) => {
  return touched && error ? <div className="error">{error}</div> : null;
};

export const renderField = ({ input, placeholder, type, meta }) => {
  return (
    <div className="input-field">
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        autoComplete="off"
      />
      {renderError(meta)}
    </div>
  );
};
