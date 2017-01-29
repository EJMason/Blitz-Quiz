import React, {Component} from 'react';
import io from 'socket.io-client';

import Login from './Login';
import Dashboard from './dashboard/Dashboard';
import StudentHome from './studentUI/StudentHome';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    // var socket = io('http://localhost:9000');
    // socket.on('connect', () => {
    //   console.log('connected at client');
    // });

    this.state = {
      isStudent: true,
      loggedIn: false
    };
  }

  render() {
    let logged = null;
    this.state.loggedIn ? logged = <Dashboard /> : logged = <Login />;

    return (
      <div>
        {logged}
      </div>
      
    );
  }
}

export default App;