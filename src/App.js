import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import routes from './routes'
import { PublicRoute } from './routes/public'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <PublicRoute key={i} {...route} />
          )
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
