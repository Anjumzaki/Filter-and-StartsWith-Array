import React, { Component } from "react";

import "./App.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
          <h1>{this.props.headings}</h1>
      </div>
    );
  }

}
export default Header;