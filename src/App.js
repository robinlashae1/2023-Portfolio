import HomePage from './pages/Home';
import About from "./pages/About"
import Blog from "./pages/Blog"
import Project from "./pages/Project"
import Skills from './pages/Skills';
import BottomBar from './bar/BottomBar';
import NavBar from './bar/NavBar';
import { Route, Switch, BrowserRouter} from "react-router-dom";
import './styling/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact route="/">
          <HomePage />
        </Route>
        <Route exact Route="/about">
          <About />
        </Route>
        <Route exact route="/blogs">
          <Blog />
        </Route>
        <Route exact route="/myProjects">
          <Project />
        </Route>
        <Route exact route="/skills">
          <Skills />
        </Route>
        
      </Switch>
      <BottomBar />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
