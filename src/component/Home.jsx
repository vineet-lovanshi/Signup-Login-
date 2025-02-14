import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      // Redirect to login page if user is not logged in
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="home">
        <h1>Welcome Home Page</h1>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
