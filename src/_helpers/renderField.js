import React from "react";

const renderError = ({ touched, error }) => {
  return touched && error ? <div className="error">{error}</div> : null;
};

export const renderField = ({ input, placeholder, type, meta }) => {
  return (
    <div>
      <input {...input} placeholder={placeholder} type={type} />
      {renderError(meta)}
    </div>
  );
};
