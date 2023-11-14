import { User } from "./Interfaces";
import { useState } from "react";
import React from "react";
import axios from "axios";

interface SignInFormProps {
  onAuth: (user: User) => void;
}

function SignInForm(props: SignInFormProps) {
  const [username, setUsername] = useState<string>("");
  const [secret, setSecret] = useState<string>("");

  const handleOnLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };


  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnLogin}>
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your account</span>
        <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type="password"
            name="password"
            placeholder="Password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
        />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
