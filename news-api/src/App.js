import React, { Component } from 'react';
import LoginForm from './LoginForm/LoginForm';
import NewsIndex from './NewsIndex/NewsIndex';
import './App.css';

class App extends Component{
  constructor(props){
    super();
    this.state = {
      loggedIn: false,
      username: null
    }
  }

  handleLogin = (formData) => {
    this.setState({
      loggedIn: true,
      username: formData.username
    })
  }
 
  render(){

    return (
      <div>
        <h1>Gay Old Times</h1>
            <center>
          {
            this.state.loggedIn ?
            <NewsIndex username = {this.state.username}/>
            :
            <LoginForm handleLogin = {this.handleLogin} />
          }
        </center>

      </div>
    );


  }
 
}

export default App;
