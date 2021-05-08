import React, { Fragment, useEffect, useState } from 'react';
import EditTodo from './EditTodo';

const ListTodo = () => {

  const [todos, setTodos] = useState([]);

  //Delete function

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/delete/${id}`, {
        method: "DELETE"
      });
      console.log(response);
      setTodos(todos.filter(todo => todo.id !== id))
    } catch (error) {
      console.log(error);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/read");
      const jsonData = await response.json();
      setTodos(jsonData);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5" >
        <thead >
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody >
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td><button className="btn btn-danger" onClick={(e) => deleteTodo(todo.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

    </Fragment>
  );
}

export default ListTodo;