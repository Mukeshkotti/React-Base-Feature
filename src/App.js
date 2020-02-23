import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    UserName : 'Mukesh'
  }

  userNameUpdateHandler = (event) => {
    this.setState({
      UserName: event.target.value
    })
  }

  render (){
    return (
      <div className="App">
        {/* <header className="App-header">
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
        </header> */}
        <UserInput userName={this.state.UserName} changed={this.userNameUpdateHandler} />
        <UserInput userName={this.state.UserName} changed={(event)=>this.userNameUpdateHandler(event)} />
        <UserInput userName={this.state.UserName} changed={this.userNameUpdateHandler.bind(this)} />
        { /* Closing Tag */ }
        <UserOutput userName={this.state.UserName} >Closing Tag</UserOutput>
        { /* Self Closing Tag */ }
        <UserOutput userName={this.state.UserName}/>
        <UserOutput userName="John"/>
      </div>
    );
  }
  
}

export default App;
