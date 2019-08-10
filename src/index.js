import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hotdogs from './components/Hotdogs.js'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const routing = (
  <Router>
    <header>
        <span className="nav-link">
          <Link to="/hotdogs">Hot Dogs</Link>
        </span>
        <span className="nav-link">
          <Link to="/">Home</Link>
        </span>
      </header>
      <div>
      <Route exact path="/" component={App} />
      <Route path="/hotdogs" component={Hotdogs} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
