import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './dashboard';
//import { createBrowserHistory } from 'history';
import LoginForm from './login'
import reportWebVitals from './reportWebVitals';
//import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
<Router>
   <Switch>
    <Route path='/dashboard' component={Dashboard}/>
    <Route path='/' component={LoginForm} />
  </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
