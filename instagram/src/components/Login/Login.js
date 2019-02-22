import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

  handleChanges = e => this.setState({ [e.target.name]: e.target.value });

  signIn = e => {
    e.preventDefault();
    localStorage.setItem('user', this.state.username);
    window.location.reload();
  };

  render() {
    return (
    <form className="loginForm">
        <p>Username</p>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChanges}/>
        <p>Password</p>
        <input type="text" name="password" value={this.state.password} onChange={this.handleChanges}/>
        <input  className="loginButton" type="button" onClick={this.signIn} value="Login"/>
    </form>
    );
  }
}

export default Login;
