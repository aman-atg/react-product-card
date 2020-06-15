import React, { useRef, useEffect } from "react";

import logo from "../assets/img/logo.png";
import blue from "../assets/img/blue.png";
import black from "../assets/img/black.png";
import green from "../assets/img/green.png";
import red from "../assets/img/red.png";
import orange from "../assets/img/orange.png";

const Home = () => {
  var sizes;

  function changeSize() {
    sizes.forEach(size => size.classList.remove("active"));
    this.classList.add("active");
  }
  useEffect(() => {
    sizes = document.querySelectorAll(".size");
    sizes.forEach(size => size.addEventListener("click", changeSize));
    console.log(sizes);
  }, []);

  return (
    <div className="Home">
      <div className="container">
        <div className="card">
          <div className="shoeBackground">
            {/* Gradients */}
            <div className="gradients">
              <div className="gradient" color="blue"></div>
              <div className="gradient" color="red"></div>
              <div className="gradient" color="green"></div>
              <div className="gradient" color="orange"></div>
              <div className="gradient" color="black"></div>
            </div>

            <h1 className="nike">nike</h1>
            <img src={logo} alt="logo" className="logo" />

            <a href="#" className="share">
              <i className="fas fa-share-alt"></i>
            </a>

            {/* Product Images */}
            <img src={blue} alt="blue shoe" className="shoe" color="blue" />
            <img src={red} alt="red shoe" className="shoe" color="red" />
            <img src={green} alt="green shoe" className="shoe" color="green" />
            <img
              src={orange}
              alt="orange shoe"
              className="shoe"
              color="orange"
            />
            <img
              src={black}
              alt="black shoe"
              className="shoe show"
              color="black"
            />
          </div>

          <div className="info">
            <div className="shoeName">
              <div>
                <h1 className="big">Nike Zoom KD 12</h1>
                <span className="new">new</span>
              </div>
              <h3 className="small">Men's running shoes</h3>
            </div>
            <div className="description">
              <h3 className="title">Product Info</h3>
              <p className="text">
                Ensure a comfortable running session by wearing this pair of
                cool running shoes from Nike.
              </p>
            </div>
            <div className="color-container">
              <h3 className="title">Color</h3>
              <div className="colors">
                <span
                  className="color active"
                  primary="#2175f5"
                  color="blue"
                ></span>
                <span className="color" primary="#f84848" color="red"></span>
                <span className="color" primary="#29b864" color="green"></span>
                <span className="color" primary="#ff5521" color="orange"></span>
                <span className="color" primary="#444" color="black"></span>
              </div>
            </div>
            <div className="size-container">
              <h3 className="title">size</h3>
              <div className="sizes">
                <span className="size">7</span>
                <span className="size">8</span>
                <span className="size active">9</span>
                <span className="size">10</span>
                <span className="size">11</span>
              </div>
            </div>
            <div className="buy-price">
              <a href="#" className="buy">
                <i className="fas fa-shopping-cart"></i>Add to card
              </a>
              <div className="price">
                <i className="fas fa-dollar-sign"></i>
                <h1>189.99</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
