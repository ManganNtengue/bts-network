import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LoginPage from './components/pages/login/LoginPage';
// import LoginPage from './components/pages/login/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

 
  return (
    <div>
      <LoginPage/>
    </div>
  );
}

export default App;
