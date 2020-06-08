import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

function ProductList(props) {
  return (
    <div>{props.products.map(c => <Product key={c.id} title={c.title} />)}</div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;
