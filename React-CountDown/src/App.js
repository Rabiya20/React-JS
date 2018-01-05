import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Time from './Time.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      deadline: '04 Dec 2017',
      newDeadline: ''
    }
  }

  changeDeadline(){
    this.setState({deadline: this.state.newDeadline})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Timer with React</h1>
        </header>
        <div className='timerBody'>
          <div className='countHead'>
            Countdown to {this.state.deadline}
          </div>
            <Time 
              deadline={this.state.deadline}
            />
            <input
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})}/>
            <button onClick={() => this.changeDeadline()}>
              Done
            </button>
        </div>
      </div>
    );
  }
}

export default App;
