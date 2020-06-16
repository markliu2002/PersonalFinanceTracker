// SORTING BUTTON COMPONENT
import React, { Component } from 'react'

export class Sorting extends Component {

  // render() method that returns what to display
  // onClick we call the reverseSort method which we got passed down as a prop
  render() {
    return (
      <div className="sortingDiv">
          <button className="sortBtn" onClick={this.props.reverseSort}>Toggle Sort</button>
      </div>
    )
  }
}

// "export" is ES6's feature which is used to Export a module(file) and use it in some other module(file).
export default Sorting
