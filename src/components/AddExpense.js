// ADDING EXPENSES COMPONENT (right under the Header that says "Finance Tracker")
import React, { Component } from 'react';

// import moment to format the current time
import moment from 'moment';

export class AddExpense extends Component {

  // The AddExpense component has its own state. Initially the name of the expense is nothing, cost is 0, category is Food & Drinks, and the date is the current time
  state = {
    name: '',
    cost: 0,
    category: 'Food & Drinks',
    date: moment().format('MMMM Do YYYY, h:mm:ss a'),
  }




  // handleNameChange function to set the state of the AddExpense component. Changes the 'name' key to the value of the input element
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  // handleCostChange function to set the state of the AddExpense component. Changes the 'cost' key to the value of the input element
  handleCostChange = (e) => {
    this.setState({
      cost: e.target.value
    });
  }

  // handleCatChange function to set the state of the AddExpense component. Changes the 'category' key to the value of the input element
  handleCatChange = (e) => {
    this.setState({
      category: e.target.value
    });
  }

  // handleSubmit function to call the addExpense function (which we got passed down as a prop) and pass in the new expense(which needs a name, cost, category, and date, or else a "Missing Information" alert will pop up)
  handleSubmit = (e) => {
    // it's gonna try to submit to the actual file, we stop that with e.preventDefault()
    e.preventDefault();

    // Only call the addExpense function (which we got passed down as a prop) if the name is not empty and cost is not zero
    if (this.state.name!=='' && this.state.cost!==0) {

      // Have to set state again before calling the addExpense function or else date will be the same one as from when it initially ran.
      this.setState({
        name: this.state.name,
        cost: this.state.cost,
        category: this.state.category,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      });
      
      // Alert so user can see that the expense name, cost, category, and date are correct
      alert(`New Expense Added: ${this.state.name} $${this.state.cost} ${this.state.category} ${this.state.date}`)
      
      // Calls the addExpense function (which we got passed down as a prop) and passes in the new expense(name, cost, category, and date)
      this.props.addExpense(this.state.name, this.state.cost, this.state.category, this.state.date);

      // reset name, cost, category, and date after expense has been addded
      this.setState({
        name: '',
        cost: 0,
        category: 'Food & Drinks',
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      }); 

    } 
    // else means the name was empty or the cost was still 0
    else {
      // Alert to tell the user that they are missing information
      alert('Missing Information!');
    }
  }




  // render() method that returns what to display
  render() {
    return (

      // The whole form is inside the addExpenseDiv. When form is submitted, called the handleSubmit function(see above)
      <div className="addExpenseDiv">
        <form onSubmit={this.handleSubmit} action="" method="">

          <label>Name:</label> 
          <input // Input for expense name
          type="text"
          title="name"
          placeholder="Add Expense Name..."
          value={this.state.name} // Sets value to this.state.name (initially is '')
          onChange={this.handleNameChange} // React ships with a number of synthetic events that work across all browsers. "onChange" will capture any changes to our input box. need to add an onChange handler and update the state b/c when we start typing in the textbox, the title in the state is going to have whatever we type inside of it.
          />

          <label>Cost:</label>
          <input // Input for expense cost
          type="number"
          title="cost"
          // placeholder="Add Expense Cost..."
          value={this.state.cost} // Sets value to this.state.cost (initially is 0)
          onChange={this.handleCostChange} // React ships with a number of synthetic events that work across all browsers. "onChange" will capture any changes to our input box. need to add an onChange handler and update the state b/c when we start typing in the textbox, the title in the state is going to have whatever we type inside of it.
          />

          <label>Category:</label> 
          <select // Drop down menu to show all the categories. 
          value={this.state.category} 
          onChange={this.handleCatChange} // Needs the "onChange" function just like Cost and Name in order to capture any changes
          style={{flex:'1'}}
          > 
            <option value="Food & Drinks" >Food & Drinks</option>
            <option value="Transportation" >Transportation</option>
            <option value="Utilities" >Utilities</option>
            <option value="Personal" >Personal</option>
          </select>
          
          <input // Input for the submit button
          type="submit" 
          value="Submit"
          className="btn"
          style={{flex:'1'}}
          />

        </form> 
      </div>
    );
  }
}

// "export" is ES6's feature which is used to Export a module(file) and use it in some other module(file).
export default AddExpense
