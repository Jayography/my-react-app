import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Cards from './Cards'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my React space!  </h1>
        </header>
        <p className="App-intro">
          <MuiThemeProvider>
              <Cards />
  </MuiThemeProvider>
        </p>
      </div>
    );
  }
}

export default App;
