import React from 'react';
import './App.css';
import Home from './components/Home'
import Store from './components/Store'
import Contact from './components/Contact'

// Using React router to allow different URLs
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
  <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/store" element={<Store/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </>
  );
}

export default App;