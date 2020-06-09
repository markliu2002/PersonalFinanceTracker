import React, { Component } from 'react'

export class Sorting extends Component {

  render() {
    return (
      <div className="sortingDiv">
          <button onClick={this.props.sortOldToNew} style={{flex:'1'}}>Sort By: Old to New</button>
          <button onClick={this.props.sortNewToOld} style={{flex:'1'}}>Sort By: New to Old</button> 
      </div>
    )
  }
}

export default Sorting
