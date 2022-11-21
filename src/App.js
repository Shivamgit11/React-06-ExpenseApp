import { useContext } from "react";
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
    <main>
      <Switch>
      {/* <Route path="/" exact>
            <AuthPage />
          </Route> */}
          
        {!isLoggedIn && (
          <Route path="/auth" exact>
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
    </main>
  );
}

export default App;
