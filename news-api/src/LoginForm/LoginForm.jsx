import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleLogin(this.state);

      }
    
      handleChange = (e) => {
        this.setState ({
          [e.target.name]: e.target.value
        })
      }
    

    render(){
        return (
                <form onSubmit = {this.handleSubmit} name="login-form" className="login">
                    <input onChange = {this.handleChange} type="text" name="username" placeholder="username" />
                    <input onChange = {this.handleChange}type="password" name="password" placeholder="password" />
                    <input type="submit" />
                </form>
        )
    }
    
}

export default LoginForm;