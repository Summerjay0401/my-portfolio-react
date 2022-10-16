import { Routes, Route, NavLink as Link } from "react-router-dom"
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
            <Link to='/' className={({ isActive }) => isActive? "active": ''} end>HOME</Link>
          </li>
          <li>
            <Link to='about' className={({ isActive }) => isActive? "active": ''}>ABOUT ME</Link>
          </li>
          <li>
            <Link to='portfolio' className={({ isActive }) => isActive? "active": ''}>PORTFOLIO</Link>
          </li>
          <li>
            <Link to='contact' className={({ isActive }) => isActive? "active": ''}>CONTACT ME</Link>
          </li>
          <li>
            <Link to='resume' className={({ isActive }) => isActive? "active": ''}>RESUME</Link>
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
          <Route path='resume' element={<Resume />}></Route>
        </Routes>
      </div>
    </div>
  );
}


export default App;
