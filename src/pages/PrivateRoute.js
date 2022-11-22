import { useContext } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../store/auth-context";


const Private = () => {
  const authCtx = useContext(AuthContext);

  const checkLoggedIN = authCtx.isLoggedIn;

  return (
    <div>
      {!checkLoggedIN && <Redirect to='/auth' />}

      {checkLoggedIN && <Redirect to='/Expense' />}
    </div>
  );
};

export default Private;
