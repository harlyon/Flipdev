import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './Route';


class App extends Component {
   

  render() {
    return (
      <div className="App">
        <Router>
          <BaseRouter />
        </Router>
      </div>
    );
  }
}

export default App;
