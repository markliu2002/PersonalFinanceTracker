import React from 'react';

import Header from './components/Header';
import AddExpense from './components/AddExpense';
import Expenses from './components/Expenses';


import './App.css';

class App extends React.Component {
  
  state = {
    expenses: [
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
    ]
  }


  addExpense = (name, cost, category) => {

    // […]. The spread operator can be used to take an existing array and add another element to it while still preserving the original array
    // when working with updating arrays, combining arrays, or converting node lists into arrays, it is an easy way to get the job done.
    const newExpense = {
      name: name,
      cost: cost,
      category: category
    }
    console.log(newExpense);
    this.setState({ expenses: [...this.state.expenses, newExpense]});
    console.log(this.state.expenses);
  }

  
  render() {
    return (
      <div className="App">
        <Header />
        <AddExpense addExpense={this.addExpense} />
        <Expenses expenses={this.state.expenses}/>
      </div>
    );
  }
}

export default App;
