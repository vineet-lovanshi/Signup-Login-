import React from "react";
import Home_Logo from "../images/Home_Logo.png";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if ("email" == name) {
      setEmail(value);
    }
    if ("password" == name) {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == " " || password == "") {
      alert("Please enter details");
    } else {
      let getDetails = JSON.parse(localStorage.getItem("user"));
      console.log(getDetails);

      getDetails.map((currentValue) => {
        console.log(currentValue.email);
        let storEmail = currentValue.email;
        let storPassword = currentValue.password;

        if (storEmail == email && storPassword == password) {
          alert("login successfully");
          navigate("/home");
        } else {
          return setMsg("Invalid email or password!");
        }
      });
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="signup-page">
        <form onSubmit={handleSubmit}>
          <div className="heading">
            <p>Login</p>
          </div>
          <p className="errMsg">{msg}</p>
          <div className="account">
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              onChange={handleInput}
            ></input>
            <input
              type="text"
              name="password"
              placeholder="Enter your password"
              onChange={handleInput}
            ></input>
            <p>
              Create an account ? <a onClick={() => navigate("/")}>SignUp</a>
            </p>
          </div>
          <button>Login</button>
        </form>
        <div>
          <img src={Home_Logo} alt="image"></img>
        </div>
      </div>
    </>
  );
};

export default Login;
