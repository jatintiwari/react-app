/**
 * React
 */
import React from 'react';
import ReactDOM from 'react-dom';


/**
 * React Router
 */
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

/**
 * dependencies
 */

import Layout from "./components/layout";
import Home from "./pages/home/component";
import About from "./pages/about/component";
import Topics from "./pages/topics/component";


const app = document.getElementById('app');
ReactDOM.render(<Router>
  <div>
   <Layout/>
    <hr/>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/topics" component={Topics}/>
  </div>
</Router>, app);