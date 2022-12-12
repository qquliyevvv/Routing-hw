import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import './index.css'
import Contact from './Pages/Contact/Contact'
import Work from './Pages/Work/Work';
import About from './Pages/About/About'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <NavBar/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/work*" element={<Work  />} />
        <Route path="/contact*" element={<Contact />} />
      </Routes>
    </BrowserRouter>
)
