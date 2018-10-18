import React, { Component } from 'react';
import './App.css';
// import { connect } from 'react-redux';
// import { addTeacher, getTeachers } from './actions/index';

import Login from './components/Login';

class App extends Component {
  state = {
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}



export default App;