import React from "react";
import PropTypes from "prop-types";

var Increment = React.createClass({
    render: function() {
      return (
          <div>
          <button onClick={this.doDecrement} className="fa fa-minus fa-inverse fa-2x"></button>
          <input type="text" className="number" value={this.state.value }></input>
          <button onClick={this.doIncrement} className="fa fa-plus fa-inverse fa-2x"></button>
          <sub>{this.state.message}</sub>
          </div>
        );
    },
    getInitialState: function(){
      return {
        value: 0,
        message: null
      }
    },
    doDecrement: function() {
      if(this.state.value) {
        this.setState({
          value: this.state.value - 1,
          message: null
        });
      } else {
        this.setState({
          message: "Can't decrement. Since 0 is the min value"
        });
      }
    },
    doIncrement: function() {
      if(this.state.value < 10) {
        this.setState({
          value: this.state.value + 1,
          message: null
        });
      } else {
        this.setState({
          message: "Can't increment. Since 10 is the max value"
        });
      }
    }
  });

  export default Increment;