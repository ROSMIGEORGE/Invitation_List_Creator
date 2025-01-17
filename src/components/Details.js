import React, { useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Add } from "@material-ui/icons";
import history from "../_helpers/history";
import { addItem, removeItem, sendItems, setLoader } from "../actions";
import Card from "./Card";
import InviteForm from "./forms/InviteForm";
import Status from "./Status";
import NavBar from "./NavBar";

//flow page that takes and displays details
const Details = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);
  const list = _.values(props.inviteList);

  const onSubmit = (formValues) => {
    setShowForm(false);
    props.addItem(formValues);
  };

  if (!props.auth.access) {
    history.push("/");
  }
  const sendItems = () => {
    if (showForm || !list.length) {
      setSubmitForm(true);
      setTimeout(() => {
        setSubmitForm(false);
      }, 100);
    } else {
      props.setLoader();
      props.sendItems();
    }
  };
  return (
    <div className="details-container">
      <NavBar />
      {list.map((item) => (
        <Card key={item.email} item={item} removeItem={props.removeItem} />
      ))}
      {showForm || !list.length ? (
        <InviteForm
          onSubmit={onSubmit}
          submitForm={submitForm}
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <div className="add-btn-wrapper">
          <div onClick={() => setShowForm(true)} className="add-btn">
            <Add />
          </div>
        </div>
      )}
      <div className="send-btn">
        <button onClick={sendItems}>send</button>
      </div>
      <Status />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    inviteList: state.inviteList,
  };
};
export default connect(mapStateToProps, {
  addItem,
  removeItem,
  sendItems,
  setLoader,
})(Details);
