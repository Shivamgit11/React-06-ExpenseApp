import { NavLink } from "react-router-dom";
import classes from "./Welcome.css";

const Welcome = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Expense Tracker</div>
      <div>
        Your Profile is incomplete
        <NavLink to="/profile">...Complete Now</NavLink>
      </div>
    </header>
  );
};
export default Welcome;
