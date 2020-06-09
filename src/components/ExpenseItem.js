// INDIVIDUAL EXPENSE ITEM (rectange log) COMPONENT

import React, { Component } from 'react';

export class ExpenseItem extends Component {

  handleDelete = (e) => { // This is redundant. can remove. Check Sorting.js
    this.props.delExpense(this.props.expense.date);
  }

  // method to set the id name depending on this.props.expense.category 
  _setIdName() {
    if (this.props.expense.category === 'Food & Drinks') 
      return "FoodexpenseItem";
    else if (this.props.expense.category === 'Transportation')
      return "TransportexpenseItem";
    else if (this.props.expense.category === 'Utilities')
      return "UtilexpenseItem";
    else 
      return "PersonalexpenseItem";
  }

  render() {
    return (
      // each expense item has the same general form so they call have className="expenseItem". What changes is their background color, so depending on the props.category, their id will be different, and then is App.css, different id's wil have different background colors. Set id to the _setIdName() method
      <div className="expenseItem"  >
        <div>
          <p className="colourStripe" id={this._setIdName()}></p>
        </div>
        <div className="ExpenseMainSection">
          <p className="ExpenseItemText">{this.props.expense.date} {'    '}  {this.props.expense.name} ${this.props.expense.cost}</p>
        </div>   
        <div className="ExpenseButtonSection">
          <button className="deleteBtn" onClick={this.handleDelete}> X </button>
        </div>

      </div>
    );
  }
}

export default ExpenseItem
