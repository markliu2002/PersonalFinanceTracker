// ADDING EXPENSES COMPONENT

import React, { Component } from 'react';
import moment from 'moment';

export class AddExpense extends Component {

  state = {
    name: '',
    cost: 0,
    category: 'Food & Drinks',
    date: moment().format('MMMM Do YYYY, h:mm:ss a'),
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleCostChange = (e) => {
    this.setState({
      cost: e.target.value
    });
  }

  handleCatChange = (e) => {
    this.setState({
      category: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name!=='' && this.state.cost!==0) {

      // Have to do this to get the current date, or else date will be the same one as from when it initially ran.
      this.setState({
        name: this.state.name,
        cost: this.state.cost,
        category: this.state.category,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      });
      
      
      alert(`New Expense Added: ${this.state.name} $${this.state.cost} ${this.state.category} ${this.state.date}`)
      this.props.addExpense(this.state.name, this.state.cost, this.state.category, this.state.date);

      // reset everything
      this.setState({
        name: '',
        cost: 0,
        category: 'Food & Drinks',
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      }); 
    } else {
      alert('Missing Information!');
    }
  }

  render() {
    return (
      <div className="addExpenseDiv">
        <form onSubmit={this.handleSubmit}>

          <label>Name:</label>
          <input 
          type="text"
          title="name"
          placeholder="Add Expense Name..."
          value={this.state.name} 
          onChange={this.handleNameChange} // React ships with a number of synthetic events that work across all browsers. One of these is onChange which will capture any changes to our input box. need to add an onChange handler and update the state b/c when we start typing in the textbox, the title in the state is going to have whatever we type inside of it.
          />

          <label>Cost:</label>
          <input 
          type="number"
          title="cost"
          placeholder="Add Expense Cost..."
          value={this.state.cost} 
          onChange={this.handleCostChange} // React ships with a number of synthetic events that work across all browsers. One of these is onChange which will capture any changes to our input box. need to add an onChange handler and update the state b/c when we start typing in the textbox, the title in the state is going to have whatever we type inside of it.
          />

          <label>Category:</label>
          <select value={this.state.category} onChange={this.handleCatChange} style={{flex:'1'}}>
            <option value="Food & Drinks" >Food & Drinks</option>
            <option value="Transportation" >Transportation</option>
            <option value="Utilities" >Utilities</option>
            <option value="Personal" >Personal</option>
          </select>
          
          <input 
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


export default AddExpense
