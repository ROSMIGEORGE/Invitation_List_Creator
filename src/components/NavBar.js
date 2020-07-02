import React from "react";
import { connect } from "react-redux";
import { endSession } from "../actions";

//navigation bar
const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <button onClick={props.endSession}>Logout</button>
    </div>
  );
};

export default connect(null, { endSession })(NavBar);
