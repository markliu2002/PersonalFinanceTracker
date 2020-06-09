// THIS COMPONENT IS AN INDIVIDUAL EXPENSE ITEM. EACH RECTANGLE

import React, { Component } from 'react';

export class ExpenseItem extends Component {

  handleDelete = (e) => { // This is redundant. can remove. Check Sorting.js
    this.props.delExpense(this.props.expense.date);
  }

  render() {
    return (
      <div style={itemStyle}>
        <h2 className="ExpenseItemDate">{this.props.expense.date}</h2>
        <h2 className="ExpenseItemName">{this.props.expense.name}</h2>
        <h2 className="ExpenseItemCat">{this.props.expense.category}</h2>
        <h2 className="ExpenseItemCost">${this.props.expense.cost} <button style={btnStyle} onClick={this.handleDelete}> X </button></h2>
      </div>
    );
  }
}



const itemStyle = {
  display: 'flex',                  /* establish flex container */
  flexDirection: 'row',            /* default value; can be omitted */
  flexWrap: 'nowrap',              /* default value; can be omitted */
  justifyContent: 'space-between', /* switched from default (flex-start, see below) */

  background: '#F5F5F5',
  borderRadius: '15px',
  borderStyle: 'solid',
  margin: '5px 30px',
  padding: '10px 20px',
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  width: '40%',
  height: '50%',
  borderRadius: '10px',
  cursor: 'pointer',
  float: 'right'
}

export default ExpenseItem
