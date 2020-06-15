import React from "react";
import logo from "../assets/img/logo.png";
import blue from "../assets/img/blue.png";
import black from "../assets/img/black.png";
import green from "../assets/img/green.png";
import red from "../assets/img/red.png";
import orange from "../assets/img/orange.png";

const Home = () => {
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

          <div class="info">
            <div class="shoeName">
              <div>
                <h1 class="big">Nike Zoom KD 12</h1>
                <span class="new">new</span>
              </div>
              <h3 class="small">Men's running shoes</h3>
            </div>
            <div class="description">
              <h3 class="title">Product Info</h3>
              <p class="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
            </div>
            <div class="color-container">
              <h3 class="title">Color</h3>
              <div class="colors">
                <span
                  class="color active"
                  primary="#2175f5"
                  color="blue"
                ></span>
                <span class="color" primary="#f84848" color="red"></span>
                <span class="color" primary="#29b864" color="green"></span>
                <span class="color" primary="#ff5521" color="orange"></span>
                <span class="color" primary="#444" color="black"></span>
              </div>
            </div>
            <div class="size-container">
              <h3 class="title">size</h3>
              <div class="sizes">
                <span class="size">7</span>
                <span class="size">8</span>
                <span class="size active">9</span>
                <span class="size">10</span>
                <span class="size">11</span>
              </div>
            </div>
            <div class="buy-price">
              <a href="#" class="buy">
                <i class="fas fa-shopping-cart"></i>Add to card
              </a>
              <div class="price">
                <i class="fas fa-dollar-sign"></i>
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
