import React from 'react';

import Header from './components/Header';
import AddExpense from './components/AddExpense';
import Sorting from './components/Sorting';
import Expenses from './components/Expenses';


import './App.css';

class App extends React.Component {
  
  state = {
    expenses: [
      /*
      {
        name: 'Tesla',
        cost: 35000,
        category: 'Transportation'
      },
      {
        name: 'Electricity',
        cost: 100,
        category: 'Utilities'
      },
      {
        name: 'Massage',
        cost: 80,
        category: 'Personal'
      },
      */
    ],
  }


  addExpense = (name, cost, category, date) => {

    // […]. The spread operator can be used to take an existing array and add another element to it while still preserving the original array
    // when working with updating arrays, combining arrays, or converting node lists into arrays, it is an easy way to get the job done.
    const newExpense = {
      name: name,
      cost: cost,
      category: category,
      date: date,
    }
    console.log(newExpense);
    this.setState(
      { expenses: [...this.state.expenses, newExpense] }
    );
    console.log(this.state.expenses);
  }

  // Have to put this delExpense function is App.js cuz if we put it in Expense.js, that is just the array component that holds all the ExpenseItems. This App.js is the actual UI. We need to pass this function from here (b/c the UI will be changed for every delete) to Expense.js (b/c the array will be changed for every delete) then to ExpenseItem.js (where the actual delete button is)
  delExpense = (date) => {
    // set state b/c actual UI is gonna change
    this.setState(
      // set expenses(key value pair) to expenses but we only want the ones who's date key is not equal to the date we got passed in 
      {expenses: this.state.expenses.filter(expense => expense.date!==date)}
    );
  }

  sortNewToOld = () => {
    alert('CLICKED sort NEW to old')
    const {expenses} = this.state
    let newExpenses = expenses.reverse() // Currently these buttons do the same thing
    this.setState(
      {expenses: newExpenses}
    );
  }

  sortOldToNew = () => {
    alert('CLICKED sort OLD to new')
    const {expenses} = this.state
    let newExpenses = expenses.reverse() // Currently these buttons do the same thing
    this.setState(
      {expenses: newExpenses}
    );
  }

  
  render() {
    return (
      <div className="App">
        <Header />
        <AddExpense addExpense={this.addExpense} />
        <Sorting sortNewToOld={this.sortNewToOld} sortOldToNew={this.sortOldToNew}/> 
        <Expenses expenses={this.state.expenses} delExpense={this.delExpense}/>
      </div>
    );
  }
}

export default App;
