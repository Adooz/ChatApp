import { useState } from "react";
import { User } from "./Interfaces";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";
import "./styles.css";

interface AuthPageProps {
  onAuth: (user: User) => void;
}

const AuthPage: React.FC<AuthPageProps> = (props) => {
  const [type, setType] = useState("signIn");
  const handleOnClick = ( text: string ) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");

  return (
    <div className="App">
      <h2>Sign in/up Form</h2>
      <div className={containerClass} id="container">
        <SignUpForm onAuth={props.onAuth} />
        <SignInForm onAuth={props.onAuth} />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default AuthPage;
