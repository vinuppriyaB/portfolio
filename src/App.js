import "./App.css";
import { Header } from "./component/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Projects } from "./component/Projects";
import { Contact } from "./component/Contact";
import { Skills } from "./component/Skills";
import About from "./component/About";
import AboutMe from "./component/AboutMe";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <About />
              <AboutMe />
              <Projects />
              <Contact />
            </Route>
            <Route exact path="/skill">
              <Header />
              <AboutMe />
            </Route>
            <Route exact path="/project">
              <Header />
              <Projects />
            </Route>
            <Route exact path="/contact">
              <Header />
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
