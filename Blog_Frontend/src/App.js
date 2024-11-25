import './App.css';
import React from "react";
import MainRouter from './components/Router/MainRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <MainRouter />
    </div>
  );
}

export default App;
