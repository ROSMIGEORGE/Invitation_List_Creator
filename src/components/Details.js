import React from "react";
import { connect } from "react-redux";
import { addItem } from "../actions";

const Details = (props) => {
  return <div>Details</div>;
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, addItem)(Details);
