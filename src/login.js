import React from 'react';
import { useHistory } from 'react-router-dom';
//import Dashboard from './dashboard';
import './login.css'

class LoginForm extends React.Component {

    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      input
    });
  }

  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["username"]) {
            isValid = false;
            errors["username"] = "Please enter your username";
        }

    if (!input["password"]) {
                isValid = false;
                errors["password"] = "Please enter your password";
        }

    if (typeof input["username"] !== "undefined") {
      const re = /^\S*$/;
      if(input["username"].length < 6 || !re.test(input["username"])){
          isValid = false;
          errors["username"] = "Please enter valid username.";
      }
    }

     if (typeof input["password"] !== "undefined") {
       if(input["password"].length < 6){
            isValid = false;
            errors["password"] = "Please add at least 6 charachter.";
      }
    }
     this.setState({
        errors: errors
      });

     return isValid;
  }


  handleSubmit(event) {
    event.preventDefault();
      if(this.validate()) {
         console.log(this.state);
         let input = {};
         input["username"] = "";
         input["password"] = "";
         this.setState({input:input});
         this.props.history.push("/dashboard");
      }
  }

 render() {

    return (
      <div class='body'>
      <div class ='div-login'>
        <div class='login-head' >ACCOUNT LOGIN</div>
           <form onSubmit={this.handleSubmit}>

            <div class="form">
              <label>USERNAME</label>
              <input
                  type="text"
                  name="username"
                  value={this.state.input.username}
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Enter username"
                  id="username" /><br/>

              <div className="input-error">{this.state.errors.username}</div><br/>

             <label>PASSWORD</label>
             <input
                  type="password"
                  name="password"
                  value={this.state.input.password}
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Enter password"
                  id="password" /><br/>

             <div className="input-error">{this.state.errors.password}</div>

           <button  type="submit" onclick={this.handleSubmit} value="Login" class="login" >Login</button>

          </div>
        </form>
        </div>

      </div>
    );
  }
}

export default LoginForm;
