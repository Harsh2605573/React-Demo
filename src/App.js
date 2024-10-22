import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Main from './Components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Docs from './Components/Docs';
import Abouts from './Components/Abouts';
import Supports from './Components/Supports';


function App() {
  return (
    <>
      <Router>

        <Navbar />

        <Switch>

          <Route exact path='/'>
          <Body />
          <Main />
          </Route>

          <Route path='/docs'>
          <Docs />
          </Route>

          <Route path='/abouts'>
          <Abouts />
          </Route>

          <Route path='/suppots'>
          <Supports />
          </Route>

        </Switch>

      </Router>

      
    </>
  );
}

export default App;
