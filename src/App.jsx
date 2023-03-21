import React from 'react'
import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import { NotFound } from './pages/notFound';

function App() {

  return (
    
    <div className="App">
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
