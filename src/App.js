import logo from './logo.svg';
import './App.css';
import Gatete from './components/Gatete';
import MoarGatetes from './components/MoarGatetes'
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
              <MoarGatetes/>
            </Route>
            <Route path="/id/:id">
              <Gatete/>
              <MoarGatetes/>
            </Route>
          </Switch>
        </Router>
    </ContextProvider>
  );
}

export default App;
