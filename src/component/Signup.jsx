import React from "react";
import signup from "../images/signup.png";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const userDetail = { name: "", email: "", password: "" };
  const [data, setData] = useState(userDetail);

  const handleInput = (event) => {
    // console.log(event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.name == "" || data.email == "" || data.password == "") {
      alert("Please enter details");
    } else {
      const getData = JSON.parse(localStorage.getItem("user") || "[]");
      let arr = [];
      arr = [...getData];
      arr.push(data);
      const setData = localStorage.setItem("user", JSON.stringify(arr));
      alert("Signup successfully");
      navigate("/login");
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="signup-page">
        <form onSubmit={handleSubmit}>
          <div className="heading">
            <p>SignUp</p>
          </div>
          <div className="account">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleInput}
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleInput}
            ></input>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleInput}
            ></input>
            <p>
              Already have an account ?{" "}
              <a onClick={() => navigate("/login")}>Login</a>
            </p>
          </div>
          <button>Sign Up</button>
        </form>
        <div>
          <img src={signup} alt="image"></img>
        </div>
      </div>
    </>
  );
};

export default Signup;
