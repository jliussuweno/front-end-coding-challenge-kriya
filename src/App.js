import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

import ProductList from "./components/ProductList";

class App extends Component {
  // default state object
  state = {
    products: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        // create an array of contacts only with relevant data
        const newProducts = response.data.map(c => {
          return {
            id: c.id,
            title: c.title
          };
        });

        // create a new "state" object without mutating
        // the original state object.
        const newState = Object.assign({}, this.state, {
          products: newProducts
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Coding Challenge Kriya 2020</h1>
        </header>

        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default App;
