import './App.css';
import {Header} from "./component/Header";
import {BrowserRouter as Router,Switch, Route, Link, Redirect,} from "react-router-dom";
import {Projects} from "./component/Projects";
import {Contact} from "./component/Contact";
import {Skills} from "./component/Skills";
import About from './component/About';


function App() {
  return (
    <div className="App">
    <Router>
    
    <Switch>
      <Route  exact path="/">
     <Header/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     </Route>
     <Route  exact path="/skill">
     <Header/>
     <Skills/>
     </Route>
     <Route  exact path="/project">
     <Header/>
     <Projects/>
     </Route>
     <Route  exact path="/contact">
     <Header/>
     <Contact/>
     </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
