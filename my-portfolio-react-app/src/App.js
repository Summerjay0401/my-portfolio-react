import { Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import About from "./components/About"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"
import Resume from "./components/Resume"

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='about'>ABOUT ME</Link>
          </li>
          <li>
            <Link to='portfolio'>PORTFOLIO</Link>
          </li>
          <li>
            <Link to='contact'>CONTACT ME</Link>
          </li>
          <li>
            <Link to='resume'>RESUME</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        {/* this defines all the routes */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='portfolio' element={<Portfolio />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='about' element={<Resume />}></Route>
        </Routes>
      </div>
    </div>
  );
}


export default App;
