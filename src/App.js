import './App.css';
import { Component } from 'react';

import InputTodo from './components/InputTodo';
import { todos } from './todos.json';
console.log(todos);

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="mt-5">
          <a href="https://www.linkedin.com/in/carlos-rodas-65303a1a8/" className="text-black">
            Developed by ARANEKO Rodas
          </a>
        </div>
        <InputTodo></InputTodo>
        {/* { todos } */}

      </div>
    )
  }
}

export default App;
