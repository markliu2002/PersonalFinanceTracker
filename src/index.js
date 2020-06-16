import React from 'react'; // Import the library
import ReactDOM from 'react-dom'; // Import the react-dom
import App from './App'; // Import the main App component


// ReactDOM renders the <App/> component into the div with the id="root". <App/> is just the App.js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

