import React from 'react';
import Inputfield from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './stores/UserStore'

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      buttonDisabled: false
     }
  }

  setInputValue(property, val) {
    val = val.trim();
    if (val.length > 12) {
      return;
    }

    this.setState({
      [property]: val

    })
  }

  resetform() {
    this.setState({
      username: '',
      password: '',
      bottonDisabled: false
    })
  }

  async doLogin() {
    if (!this.state.username) {
      return;
    }

    if (!this.state.password) {
      return;
    }

    this.setState({
      buttonDisabled: true
    })

    try {
      let res = await fetch('/login', {
        method: 'post',
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
          username: this.state.username,
          password: this.state.password
        })
      });

      let result = await res.json();
      if (result && result.success) {
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;

      }

      else if (result && result.success === false) {
        this.resetform();
        alert(result.msg);
      }
    }

    catch(e) {
      console.log(e);
      this.resetform();
    }
  }
  render () {
    return (
      <div className="loginForm">
        Log in 
        <Inputfield
          type = 'text'
          placeholder = 'Username'
          value = {this.state.username ? this.state.username: ''}
          onChange={ (val) => this.setInputValue('username', val) }
        />

        <Inputfield
          type = 'password'
          placeholder = 'Password'
          value = {this.state.password ? this.state.password: ''}
          onChange={ (val) => this.setInputValue('password', val) }
        />

        <SubmitButton 
          text = 'Login'
          disabled={this.state.buttonDisabled}
          onClick = { () => this.doLogin() } 
        />
      </div>
    );
  }
}

export default LoginForm;