import { StrictMode } from 'react';
import HomePage from './pages/Home';
import About from "./pages/About"
import Blog from "./pages/Blog"
import Project from "./pages/Project"
import Skills from './pages/Skills';
import BottomBar from './bar/BottomBar';
import NavBar from './bar/NavBar';
import { Route, Routes, BrowserRouter} from "react-router-dom";
import './styling/App.css';

function App() {
  return (
    <div className="App">
      <StrictMode>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blogs" element={<Blog />} />
        <Route exact path="/myProjects" element={<Project />} />
        <Route exact path="/skills" element={<Skills />} />
      </Routes>
      <BottomBar />
      </BrowserRouter>
      </StrictMode>
    </div>
  );
}

export default App;
