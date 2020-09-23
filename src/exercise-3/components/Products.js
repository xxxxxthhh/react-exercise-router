import React, { Component } from "react";
import jsonData from "../mockups/data";
import {Link} from "react-router-dom";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: jsonData,
    };
  }

  render() {
    return (
      <div>
        <div>All Products：</div>
        {console.log(this.state.data.key)}
        {Object.keys(this.state.data).map((key)=><div><Link key={key} to={'/products/' + key}>{key}</Link></div>)}
      </div>
    );
  }
}
export default Products;
