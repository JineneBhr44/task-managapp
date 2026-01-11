/*import logo from './logo.svg';*/
import './App.css';
import React from 'react';
import Header from "./components/header";
import Login from "./components/login";
import Taskform from "./components/taskForm";
import Tasklist from "./components/tasklist";
function App() {
  const tasks=[
    {
      id:1,
      title:"Apprendre React",
      priority :"Haute",
      status :"A faire",
    },
    {
      id:2,
      title:"Créer des components",
      priority :"Moyenne",
      status :"En cours",
    }
  ];
  return (
    <div>
      <Header />
      <Login />
      <Taskform />
      <Tasklist tasks={tasks}/>
    </div>
  );
}

export default App;
