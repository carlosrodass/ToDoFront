import React, { Fragment, useEffect, useState } from 'react';
import EditTodo from './EditTodo';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    margin :'0px',
    padding: '20px',
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: '10px'
  }
}));

const ListTodo = () => {

  const [todos, setTodos] = useState([]);
  const classes = useStyles();

  
  const openModal = ()=> {
    alert("ABRIENDO");
  }
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

      <List component="nav" className={classes.root} aria-label="contacts">
        {todos.map(todo => (
          <ListItem button
            key={todo.id}>
            <ListItemText primary={todo.description} />

            <Button className={classes.button}
              variant="contained"
              color="default"
              size="small"
              startIcon={<EditIcon />}
              onClick={(e) => openModal(todo.id)}>

              Edit</Button>

            <Button
              variant="contained"
              color="secondary"
              size="small"
              startIcon={<DeleteIcon />}
              onClick={(e) => deleteTodo(todo.id)}>
              Delete</Button>
          </ListItem>
        ))}
      </List>
      {/* 
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
              <td><Button
                variant="contained"
                color="secondary"
                size="small"
                startIcon={<DeleteIcon />}
                onClick={(e) => deleteTodo(todo.id)}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </table> */}

    </Fragment>
  );
}

export default ListTodo;