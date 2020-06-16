// INDIVIDUAL EXPENSE ITEM COMPONENT (< the actual rectangles that have the expense, time, and cost)
import React, { Component } from 'react';

export class ExpenseItem extends Component {

  // handleDelete function that will run when the deleteBtn is clicked. It will call the delExpense function(that got passed down as a prop) and pass the date.
  // Need to pass the date b/c that is how we will know which expense to delete. The date is unique for each expense
  handleDelete = (e) => { 
    this.props.delExpense(this.props.expense.date);
  }



  // function to set the id name depending on the category of the expense (< this.props.expense.category )
  // this __setIdName() function is used to set the id of each expenseItem so we know what colour to give it (based on its category)
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



  // render() method that returns what to display
  // Each expense item has a colour stripe("colourStripe") to show its category, the main section ("ExpenseMainSection") which has the date, expense name, and cost, and lastly, has a delete button("deleteBtn") 
  render() {
    return (
      // each expense item has the same general form so they call have className="expenseItem". What changes is their background color, so depending on the props.category, their id will be different, and then is App.css, different id's wil have different background colors. 
      // To accomplish this, have to set the id to the _setIdName() function
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

// "export" is ES6's feature which is used to Export a module(file) and use it in some other module(file).
export default ExpenseItem
