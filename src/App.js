import './App.css';
import { Component } from 'react';

import InputTodo from './components/InputTodo';
import { todos } from './todos.json';
console.log(todos);

class App extends Component {
  render() {
    return (
      <div className="App container">

        <InputTodo></InputTodo>
        {/* { todos } */}

      </div>
    )
  }
}

export default App;
