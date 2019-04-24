import React from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import './index.scss';

function App() {
  return (
    <div className="App">
        <h1 style={{textAlign: 'center'}}>todoList</h1>
        <div className="todo-container">
            <Header />
            <ul className="todo-box">
                <TodoItem />
            </ul>
        </div>
    </div>
  );
}

export default App;
