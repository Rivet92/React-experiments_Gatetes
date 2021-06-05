import logo from './logo.svg';
import './App.css';
import Gatete from './Gatete';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gatetes!!</h1>
      </header> 
      <Router>
        <Switch>
          <Route exact path="/">
            <Gatete />
          </Route>
          <Route path="/id/:id" render={props => <Gatete {...props.match.params} />} />
        </Switch>
      </Router>
      <a href="/">Quiero ver otro gatete!!</a>
    </div>
  );
}

export default App;
