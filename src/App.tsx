import React from 'react';
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route } from "react-router-dom"
import { UserProvider } from "./providers/UserProvider"
import './App.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <Wrapper />
      </Router>
    </UserProvider>
  );
}

export default App;
