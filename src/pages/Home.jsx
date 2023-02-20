import React from "react";
import NavBar from "../components/NavBar";
import header from "../assets/img/header.png";

const Home = () => {
  return (
    <div className="w-full bg-violetP">
      <div className=" fixed-top ">
        <NavBar />
      </div>

      <div className="w-full h-screen ">
        <img src={header} className="w-full object-contain" alt="" />
      </div>
    </div>
  );
};

export default Home;
