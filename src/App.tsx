import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { ModalProvider } from './hooks/useModalContext';
import Home from './pages/Home/Home';
import TokenProvider from './provider/TokenProvider';
// import Routes from './route/routes'

const App = () =>{
  return (
  <TokenProvider>
    <ModalProvider>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Navigation />
    </ModalProvider>
  </TokenProvider>
  )
}

export default App;
