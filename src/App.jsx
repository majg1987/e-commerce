import React from 'react'
import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import { NotFound } from './pages/notFound';
import { NavBar } from './components/nav/NavBar';

function App() {

  return (
    
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
