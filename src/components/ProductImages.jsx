import React, { Fragment } from "react";

import blue from "../assets/img/blue.png";
import black from "../assets/img/black.png";
import green from "../assets/img/green.png";
import red from "../assets/img/red.png";
import orange from "../assets/img/orange.png";

const ProductImages = ({shoeSize,shoeColor}) => {
  return (
    <Fragment>
      <img src={blue} alt="blue shoe" className={`shoe ${shoeColor ==='blue' ? 'show': '' } shoe-${shoeSize}`} color="blue" />
      <img src={red} alt="red shoe" className={`shoe ${shoeColor ==='red' ? 'show': '' } shoe-${shoeSize}`} color="red" />
      <img src={green} alt="green shoe" className={`shoe ${shoeColor ==='green' ? 'show': '' } shoe-${shoeSize}`} color="green" />
      <img src={orange} alt="orange shoe" className={`shoe ${shoeColor ==='orange' ? 'show': '' } shoe-${shoeSize}`} color="orange" />
      <img src={black} alt="black shoe" className={`shoe ${shoeColor ==='black' ? 'show': '' } shoe-${shoeSize}`} color="black" />
    </Fragment>
  );
};

export default ProductImages;
