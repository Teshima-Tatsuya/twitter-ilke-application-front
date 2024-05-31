import React from 'react';
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Wrapper />
      </Router>
    </>
  );
}

export default App;
