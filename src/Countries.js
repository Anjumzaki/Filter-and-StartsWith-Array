import React, { Component } from "react";
import './countries.css'

class Countries extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
            <ul className='con'>
              {this.props.coData.filteredcountries.map((todo) => {
                return (<li>{todo}</li>);
              }
              )}
              {this.props.coData.message ? <li>No search results.</li> : ''}
            </ul>
          </div>
    );
  }

}
export default Countries;