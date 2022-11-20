import { Fragment } from "react";

import classes from './Profile.module.css';

const Profile = () => {
    return (
        <Fragment>
            <div className={classes.header}>
            <span>Winners Never Quite, Quitters Never Win </span> 
            <span className={classes.span}>Your Profile is 64% complete, A complete Pfile has a heigher chanc to land a job</span>
            </div>
            
            
            <sec className={classes.form}>
                <h1>contact Details</h1>
                <form>
                    <label>Your Full Name</label>
                    <input type="text" required/>
                    <label>Profile Photo Url</label>
                    <input type="url" />
                    <button className={classes.btn1}>Update</button>
                </form>
            </sec>
            
        </Fragment>
    )
}

export default Profile;