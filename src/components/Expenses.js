// ARRAY OF ALL OF THE 'ExpenseItems' COMPONENT
import React, { Component } from 'react';

// Need to import ExpenseItem 
import ExpenseItem from './ExpenseItem';

export class Expenses extends Component {

  // render() method that returns what to display
  // The map() method creates a new array with the results of calling a function for every array element.
  // Maps through the 'expenses' array (which we got passed down as a prop), and for each 'expense', we output the <ExpenseItem> component (< which we also need pass the current 'expense' and the 'delExpense' function down )
  render() {
    return this.props.expenses.map((expense) => (
      <ExpenseItem expense={expense} delExpense={this.props.delExpense}/>
    ));
  }
}

// "export" is ES6's feature which is used to Export a module(file) and use it in some other module(file).
export default Expenses
