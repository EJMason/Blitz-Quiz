import React, {Component} from 'react';
import axios from 'axios';

import './App.css';

const Style = {
    backgroundImage: 'url(http://wallpapercave.com/wp/o0a73QI.jpg)',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
};

class Signup extends Component {

  constructor(props) {
    super(props);

    this.state = {
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: ''
    };
  }

  render() {

    return (
        <div style={Style}>
            <div className="row">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="modal-header">
                            <h3> BlitzQuiz</h3>
                            <button type="submit" value="Login" className="login loginmodal-submit btn btn-primary" onClick={this.loginView.bind(this)} > Login </button>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="login-modal" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog">
                    <div className ="loginmodal-container">
                        <h1> Teacher Registration </h1>
                        <form onSubmit={this.handleSubmitRegister.bind(this)}>
                            <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChangeRegister.bind(this)} placeholder="First name"/>
                            <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChangeRegister.bind(this)} placeholder="Last name"/>
                            <input name="password" type="password" value={this.state.password} onChange={this.handleChangeRegister.bind(this)} placeholder="Password"/>
                            <input name="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.handleChangeRegister.bind(this)} placeholder="Confirm Password"/>
                            <input type="submit" value="Register" className="login loginmodal-submit btn btn-primary"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      
    );
  }

    loginView (event) {
      this.props.signupView()
    }

  handleChangeRegister(event) {
    let target = event.target
    let value = target.value
    let name = target.name
    this.setState({
        [name]: value
    });
  }

  handleSubmitRegister(event) {  
    event.preventDefault();
    let stateContext = this;  
    axios.post('/register', {
        params: {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }
    })
    .then(function (response) {
        stateContext.setState({
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: ''
        })
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });          
  }



}

export default Signup;