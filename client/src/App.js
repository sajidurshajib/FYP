import React, { Component } from 'react';

import {Provider} from 'react-redux'
import store from './store'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main.js';
import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Profile from './components/Profile/Profile.js';

import {loadUser} from './actions/authAction'



class App extends Component{
  componentDidMount(){
    store.dispatch(loadUser())
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Switch>
              <Route exact={true} path='/' component={Main}/>
              <Route path='/home' component={Home}/>
              <Route path='/login' component={Login}/>
              <Route path='/register' component={Register}/>
              <Route path='/profile' component={Profile}/>
            </Switch>
          </Router>
        </div>
      </Provider>
    )
  }
}


export default App;
