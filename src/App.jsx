
import React, { useState } from 'react';
import './App.css'
import Header from './componentes/Header'
import TaskList from './componentes/TaskList'
import Task from './componentes/Task';


function App() {
  return <div className='App'> 
  <input />
  <button>+</button>
  <Header />
  <TaskList />
  <Task />

  </div>
}


export default App
