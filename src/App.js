import React from 'react';
import Header from './components/Header.js';
import TodoForm from './components/TodoForm.js';


function App() {
  return (
    <div className="toDoApp">
    <div>
      <Header/>
      <TodoForm/>
    </div>
  </div>
  );
}

export default App;
