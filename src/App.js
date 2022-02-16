
import './App.css';
import Form from './Form';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  

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
