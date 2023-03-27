import React from 'react'
import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import { NotFound } from './pages/notFound';
import { NavBar } from './components/nav/NavBar';
import { Footer } from './components/footer/Footer';
import { AppProvider } from './store/AppProvider';
import { Login } from './pages/login';

function App() {

  return (
    <AppProvider>
      <div className="App relative h-screen">  
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </AppProvider>
  )
}

export default App
