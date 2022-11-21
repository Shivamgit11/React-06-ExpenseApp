import { useRef, useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setisLoading] = useState();
  const emailInputref = useRef();
  const passwordInputref = useRef();

  const [loginState, setlogingState] = useState(false);

  const authCtx = useContext(AuthContext);

  

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    
    event.preventDefault();

    const enteredEmail = emailInputref.current.value;
    const enteredPassword = passwordInputref.current.value;

    //validatin
    setisLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD5IFGkNB01Wj6dWDO0OCDi3RhyZ2ReLjA";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD5IFGkNB01Wj6dWDO0OCDi3RhyZ2ReLjA";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setisLoading(false);
        if (res.ok) {
          
          //...
          return res.json();
        } else {
          //...
          return res.json().then((data) => {
            // show an error modal
            let eroorMessage = "Authentication failed";
            // if (data && data.error && data.error.message) {
            //   eroorMessage = data.error.message;
            // }

            throw new Error(eroorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        authCtx.login(data.idToken);
        setlogingState(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      {loginState && <Redirect to='/welcome' />}
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputref}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending Request....</p>}
        </div>
        <Link to="/forgot-password">
        <button className={classes.extrabutton}>forgot Password</button>
        </Link>
        
      </form>
      <button
        type="button"
        className={classes.forgot}
        onClick={switchAuthModeHandler}
      >
        {isLogin ? "Create new account" : "Login with existing account"}
      </button>
    </section>
  );
};

export default AuthForm;
