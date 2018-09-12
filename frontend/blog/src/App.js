import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './Route';
import './App.css';


class App extends Component {
   

  render() {
    return (
      <div className="App">
       <div className="banner">
         <div className="container">
         </div>
       </div>
        <Router>
          <BaseRouter />
        </Router>
      </div>
    );
  }
}

export default App;
