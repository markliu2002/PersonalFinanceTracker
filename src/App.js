// MAIN APP COMPONENT
import React from 'react';

// Import components
import Header from './components/Header';
import AddExpense from './components/AddExpense';
import Legend from './components/Legend';
import Sorting from './components/Sorting';
import Expenses from './components/Expenses';

// Import App.css
import './App.css';

// Need React.Component to define a React component class
class App extends React.Component {
  

  // expenses initially is an empty array
  state = {
    expenses: [],
  }



  // addExpense function to add an expense 
  addExpense = (name, cost, category, date) => {

    // Create a newExpense object with the parameters passed into addExpense
    const newExpense = {
      name: name,
      cost: cost,
      category: category,
      date: date,
    }

    /* // Check to make sure the category is correct
    if(newExpense.category === 'Food & Drinks') {
      alert('FOOD & DRINKS EXPENSE')
    }
    else if(newExpense.category === 'Transportation') {
      alert('TRANSPORTATION EXPENSE')
    }
    else if(newExpense.category === 'Utilities') {
      alert('UTILITIES EXPENSE')
    }
    else {
      alert('PERSONAL EXPENSE')
    }
    */
    
    // […]. The spread operator can be used to take an existing array and add another element to it while still preserving the original array
    // when working with updating arrays, combining arrays, or converting node lists into arrays, it is an easy way to get the job done.
    this.setState(
      { expenses: [...this.state.expenses, newExpense] }
    );
    
  }



  // delExpense function to delete an expense
  // Have to put this delExpense function is App.js not Expense.js b/c that is just the array component that holds all the ExpenseItems. This App.js is the actual UI. We need to pass this function FROM App.js   (b/c the UI will be changed for every delete)   TO Expense.js   (b/c the array will be changed for every delete)   THEN TO ExpenseItem.js   (where the actual delete button is)
  delExpense = (date) => {

    // set state b/c actual UI is going to change
    this.setState(
      // set expenses(key-value pair)l to expenses but we ony want the ones who's date key is NOT EQUAl to the date we got passed in 
      {expenses: this.state.expenses.filter(expense => expense.date!==date)}
    );
  }



  // reverseSort function to reverse the order the expenses are ordered
  reverseSort = () => {
    // alert('SORT BUTTON HAS BEEN CLICKED');
    // DESTRUCTURING: extracted the expenses array from this.state
    const {expenses} = this.state

    // newExpenses set to expenses but in reverse
    let newExpenses = expenses.reverse() // Reverses order

    // setState but set expenses to newExpenses (< reversed order)
    this.setState(
      {expenses: newExpenses}
    );
  }

  

  // render() method that returns what to display
  // Everything is inside div with className App. This div is further split into 2 sections: topSection and bottom Section
  
  // topSection is the rectangle on top which has the Header and AddExpense component (< a form to enter a new expense). Need to pass the addExpense function as a prop to the AddExpense component

  // bottomSection has the button the reverse the order of the expenses, the legend to indicate the category of the expenses, and the actual array of expenses
  // Need to pass the reverseSort function to the Sorting component
  // Need to pass expenses array and delExpense function to the Expenses component
  render() {
    return (

      <div className="App">

        <div className="topSection">
          <Header />
          <AddExpense addExpense={this.addExpense} />
        </div>
        
        <div className="bottomSection">
          <Sorting reverseSort={this.reverseSort}/> 
          <Legend />
          <Expenses expenses={this.state.expenses} delExpense={this.delExpense}/>
        </div>
      
      </div>
    );
  }
}

// "export" is ES6's feature which is used to Export a module(file) and use it in some other module(file).
export default App; 
