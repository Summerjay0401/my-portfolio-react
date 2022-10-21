import { Routes, Route } from "react-router-dom"
import Home from './components/Home/Home'
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Portfolio from "./components/Portfolio/Portfolio"
import Resume from "./components/Resume/Resume"
import Footer from "./components/Footer/Footer"

import './App.css';
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="main">
        {/* this defines all the routes */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}


export default App;
