
import './App.css';
import Form from './Form';
import Dashboard from './Dashboard';

import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useState } from "react";
import Login from './Login';

function App() {
  const [token, setToken] = useState('')
      if (!token) {
        return <Login setToken={setToken}/>
        
      }
  return (
    
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
              <Form/>
          </Route>
          <Route path="/Dashboard">
              <Dashboard/>
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
