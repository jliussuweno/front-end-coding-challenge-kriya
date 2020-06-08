import React from "react";
import PropTypes from "prop-types";
import "./Product.css";
import Increment from "./Increment"

function Product(props) {
  return (
    <div className="product">
      <span>{props.title}</span>
      <Increment/>
    </div>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired
};

export default Product;
