import './App.css';
import React from 'react';

/*import Header from "./components/header";*/
import Login from "./components/Logins/Login.jsx";
import { BrowserRouter, Routes , Route} from 'react-router-dom';
/*import Taskform from "./components/taskForm";*/
import Tasklist from "./components/Tasks/tasklist";


function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/tasks" element={<Tasklist />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
