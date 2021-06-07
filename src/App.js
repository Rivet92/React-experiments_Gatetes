import logo from './logo.svg';
import './App.css';
import Gatete from './Gatete';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React, { useContext } from 'react';
import {ContextProvider, useAppContext} from './ContextProvider';

function App() {
  return (
    <ContextProvider>
      <header className="App-header">
        <h1>Gatetes!!</h1>
      </header> 
        <Router>
          <Switch>
            <Route exact path="/">
              <Gatete/>
            </Route>
            <Route path="/id/:id" component={Gatete}>
            </Route>
          </Switch>
        </Router>
    </ContextProvider>
  );
}

export default App;
