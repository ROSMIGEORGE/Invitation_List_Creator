import React from "react";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { endSession } from "../actions";

//it displays status of send service call
const Status = (props) => {
  if (props.status) {
    let content;
    let classList = "with-bg";
    if (props.status === "success") {
      content = <div>SUCCESSFULLY SUBMITTED</div>;
    } else if (props.status === "error") {
      content = <div>SOMETHING WENT WRONG</div>;
    } else {
      classList = "";
      content = (
        <div>
          <CircularProgress />
        </div>
      );
    }

    return (
      <div className="modal">
        <div className={classList}>
          {content}
          <button onClick={props.endSession}>Ok</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return {
    status: state.status.status,
  };
};

export default connect(mapStateToProps, { endSession })(Status);
