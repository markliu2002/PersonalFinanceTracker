// THIS COMPONENT IS THE FORM ABOVE THE LIST OF ALL THE USER's EXPENSES

import React, { Component } from 'react';

export class AddExpense extends Component {

  state = {
    name: '',
    cost: 0,
    category: 'food'
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
    if (this.state.name!=='' && this.state.cost!==0 && this.state.category!=='') {
      alert(`New Expense Added: ${this.state.name} ${this.state.cost} ${this.state.category}`)
      this.props.addExpense(this.state.name, this.state.cost, this.state.category);
    this.setState({
      name: '',
      cost: 0,
      category: ''
    }); 
    } else {
      alert('Missing Information!');
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Name:</label>
          <input 
          type="text"
          title="name"
          placeholder="Add Expense Name..."
          value={this.state.name} 
          onChange={this.handleNameChange} // React ships with a number of synthetic events that work across all browsers. One of these is onChange which will capture any changes to our input box. need to add an onChange handler and update the state b/c when we start typing in the textbox, the title in the state is going to have whatever we type inside of it.
          /><br />

          <label>Cost:</label>
          <input 
          type="number"
          title="cost"
          placeholder="Add Expense Cost..."
          value={this.state.cost} 
          onChange={this.handleCostChange} // React ships with a number of synthetic events that work across all browsers. One of these is onChange which will capture any changes to our input box. need to add an onChange handler and update the state b/c when we start typing in the textbox, the title in the state is going to have whatever we type inside of it.
          /><br />

          <label>Category:</label>
          <br />
          <select value={this.state.category} onChange={this.handleCatChange}>
            <option value="food" >Food</option>
            <option value="transportation" >Transportation</option>
            <option value="utilities" >Utilities</option>
            <option value="personal" >Personal</option>
          </select><br />

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
