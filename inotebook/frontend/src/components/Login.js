import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [cred, setCred] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: cred.email, password: cred.password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //Save the auth token and redirect to home page
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-1">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={cred.email}
            onChange={onChange}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group my-1">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            value={cred.password}
            onChange={onChange}
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary my-1">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
