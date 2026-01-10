/*import logo from './logo.svg';*/
import './App.css';
import React from 'react';
import Header from "./components/header";
import Login from "./components/login";
import Taskform from "./components/taskForm";
import Tasklist from "./components/tasklist";
function App() {
  return (
    <div>
      <Header />
      <Login />
      <Taskform />
      <Tasklist />
    </div>
  );
}

export default App;
