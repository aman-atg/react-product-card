import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="card">
          <div className="shoeBackground">
            <div className="gradients">
              <div className="gradient" class="blue"></div>
              <div className="gradient" class="red"></div>
              <div className="gradient" class="green"></div>
              <div className="gradient" class="orange"></div>
              <div className="gradient" class="black"></div>
            </div>
            <h1 className="nike">nike</h1>
            <img src="./assets/img/logo.png" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
