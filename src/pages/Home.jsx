import React, { useEffect } from "react";

import logo from "../assets/img/logo.png";
import blue from "../assets/img/blue.png";
import black from "../assets/img/black.png";
import green from "../assets/img/green.png";
import red from "../assets/img/red.png";
import orange from "../assets/img/orange.png";

const Home = () => {
  var sizes, colors, shoes, gradients, shoeBackground, shoeHeight;
  var prevColor = "blue";

  function changeColor() {
    var primary = this.getAttribute("primary");
    var color = this.getAttribute("color");
    var shoe = document.querySelector(`.shoe[color="${color}"]`);
    var gradient = document.querySelector(`.gradient[color="${color}"]`);
    var prevGradient = document.querySelector(
      `.gradient[color="${prevColor}"]`
    );

    // showing correct color
    colors.forEach(color => color.classList.remove("active"));
    this.classList.add("active");

    // changing primary css variable
    document.documentElement.style.setProperty("--primary", primary);

    // showing correct img
    shoes.forEach(s => s.classList.remove("show"));
    shoe.classList.add("show");

    // dealing with gradient
    gradients.forEach(g => g.classList.remove("display", "behind"));
    prevGradient.classList.add("behind");
    gradient.classList.add("display");

    prevColor = color;
  }

  function changeSize() {
    sizes.forEach(size => size.classList.remove("active"));
    this.classList.add("active");
  }

  const changeHeight = () => {
    var x = window.matchMedia("(max-width:1000px)");
    if (!shoes[0]) shoeHeight = 0;
    else shoeHeight = shoes[0].offsetHeight;
    if (x.matches) {
      if (shoeHeight === 0) {
        try {
          setTimeout(changeHeight, 50);
        } catch (error) {
          alert("Something is Wrong!!");
        }
      }
      shoeBackground.style.height = `${shoeHeight * 0.9}px`;
    } else {
      shoeBackground.style.height = "475px";
    }
  };

  useEffect(() => {
    sizes = document.querySelectorAll(".size");
    colors = document.querySelectorAll(".color");
    shoes = document.querySelectorAll(".shoe");
    gradients = document.querySelectorAll(".gradient");
    shoeBackground = document.querySelector(".shoeBackground");

    colors.forEach(color => color.addEventListener("click", changeColor));
    sizes.forEach(size => size.addEventListener("click", changeSize));
    changeHeight();
  }, []);
  window.addEventListener("resize", changeHeight);

  return (
    <div className="Home">
      <div className="container">
        <div className="card">
          <div className="shoeBackground">
            {/* Gradients */}
            <div className="gradients">
              <div className="gradient behind" color="blue"></div>
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
            <img
              src={blue}
              alt="blue shoe"
              className="shoe show"
              color="blue"
            />
            <img src={red} alt="red shoe" className="shoe" color="red" />
            <img src={green} alt="green shoe" className="shoe" color="green" />
            <img
              src={orange}
              alt="orange shoe"
              className="shoe"
              color="orange"
            />
            <img src={black} alt="black shoe" className="shoe " color="black" />
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
                <h1>149.99</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
