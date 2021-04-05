import logo from './logo.svg';
import './App.css';
import Items from './Items.js'

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items: [],
    }
  }

  componentDidMount()
  {
    this.fetchAllItems();
  }

  async fetchAllItems()
  {
    try
    {
      const url = "http://localhost:8080/api/itempractice";
      const response = await fetch(url);
      const json = await response.json();

      this.setState({items: json}, console.log(json))
    }
    catch(e)
    {
      console.error(e);
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Items items= {this.state.items} fetchAllItems= {this.fetchAllItems.bind(this)} />
        </header>
      </div>
    );
  }
}

export default App;
