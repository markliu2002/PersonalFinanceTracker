// THIS COMPONENT IS AN INDIVIDUAL EXPENSE ITEM. EACH RECTANGLE

import React, { Component } from 'react';

export class ExpenseItem extends Component {
  render() {
    return (
      <div style={itemStyle}>
        <h2>{this.props.expense.name}</h2>
        <h4>${this.props.expense.cost}</h4>
        <h4>{this.props.expense.category}</h4>
      </div>
    );
  }
}

const itemStyle = {
  background: '#f4f4f4',
  padding: '10px',
  borderBottom: '1px #ccc dotted',
}

export default ExpenseItem
