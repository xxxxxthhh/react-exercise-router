import React, { Component } from "react";
import jsonData from "../mockups/data";
// import { Link } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: jsonData,
    };
    // console.log(this.props);
    console.log(Object.values(jsonData));
  }

  render() {
    let item = this.props.match.params.item;
    return (
      <div>
        <p>Product Details:</p>
        <div id='Details'>
          <ul>
            {
              Object.keys(this.state.data[item]).map((key) => <li>{key}:{this.state.data[item][key]}</li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}
export default Product;