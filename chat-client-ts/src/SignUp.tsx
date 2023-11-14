import { User } from "./Interfaces";
import { useState } from "react";
import React from "react";
import axios from "axios";

interface SignUpFormProps {
  onAuth: (user: User) => void;
}

function SignUpForm(props: SignUpFormProps) {
  const [username, setUsername] = useState<string>("");
  const [secret, setSecret] = useState<string>("");
  const [email, setEmail] = useState<string | undefined>();
  const [first_name, setFirstName] = useState<string | undefined>();
  const [last_name, setLastName] = useState<string | undefined>();

  const handleOnSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSignup}>
        <h1>Create Account</h1>
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
        <span>or use your email for registration</span>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          name="secret"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          placeholder="Password"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          name="first_name"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
        />
        <input
          type="text"
          name="first_name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
