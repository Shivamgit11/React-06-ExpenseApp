import { Fragment, useRef } from "react";

import classes from "./Profile.module.css";

const Profile = (props) => {
  const nameInputref = useRef();
  const profileInuputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputref.current.value;
    const enteredProfile = profileInuputRef.current.value;

    //fetching
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD5IFGkNB01Wj6dWDO0OCDi3RhyZ2ReLjA",
      {
        method: "POST",
        body: JSON.stringify({
          displayName: enteredName,
          photoUrl: enteredProfile,
          idToken: props.token,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <Fragment>
      <div className={classes.header}>
        <span>Winners Never Quite, Quitters Never Win </span>
        <span className={classes.span}>
          Your Profile is 64% complete, A complete Pfile has a heigher chanc to
          land a job
        </span>
      </div>

      <sec className={classes.form}>
        <h1>contact Details</h1>
        <form onSubmit={submitHandler}>
          <label>Your Full Name</label>
          <input type="text" ref={nameInputref} required />
          <label>Profile Photo Url</label>
          <input type="url" ref={profileInuputRef} />
          <button className={classes.btn1}>Update</button>
        </form>
      </sec>
    </Fragment>
  );
};

export default Profile;
