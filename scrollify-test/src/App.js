import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
import { toast } from 'jquery-toast-plugin'
import 'jquery-toast-plugin/dist/jquery.toast.min.css'

class App extends Component {
  componentDidMount = () => {
    $.toast('Testing toast')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
