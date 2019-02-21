import React from 'react';
import './Login.css';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handleChanges = e => this.setState({ [e.target.name]: e.target.value });

  signIn = e => {
    e.preventDefault();
    localStorage.setItem('user', this.state.username);
    window.location.reload();
  };

  render() {
    return (
    <form>
        {'username'}
        <input type="text" name="username" value={this.state.username} onChange={handleChanges}/>
        {'password'}
        <input type="text" name="password" value={this.state.password} onChange={handleChanges}/>
        <input type="button" onClick={this.signIn}/>
    </form>
    );
  }
}

export default Login;
