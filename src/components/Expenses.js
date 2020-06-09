// ARRAY OF ALL THE ExpenseItems COMPONENT

import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';

export class Expenses extends Component {
  render() {
    return this.props.expenses.map((expense) => (
      <ExpenseItem expense={expense} delExpense={this.props.delExpense}/>
    ));
  }
}

export default Expenses
