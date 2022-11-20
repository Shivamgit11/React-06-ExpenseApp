import { Fragment, useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Profile from "./pages/profile";
import Welcome from "./pages/WelcomeExpense";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    // {!isLoggedIn && (<AuthPage />) }
    <Fragment>
      <Switch>
        {!isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}

        {isLoggedIn && <Redirect to="/welcome" />}
        <Route path="/welcome" exact>
          <Welcome />
        </Route>
        <Route path="/profile">
            <Profile />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
