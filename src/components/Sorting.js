// SORTING BUTTONS COMPONENT
import React, { Component } from 'react'

export class Sorting extends Component {

  render() {
    return (
      <div className="sortingDiv">
          <button className="sortBtn" onClick={this.props.reverseSort}>Toggle Sort</button>
      </div>
    )
  }
}

export default Sorting
