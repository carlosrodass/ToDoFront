import React, { Fragment, useState } from 'react';
import ListTodo from './ListTodo';
import Container from '@material-ui/core/Container';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


const InputTodo = () => {

  const [description, setDescription] = useState("");
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:3000/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <Container maxWidth="md">
        <h1 className='mt-5'>Todo panel</h1>
        <form className="d-flex" onSubmit={onSubmitForm}>
          <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<CloudUploadIcon />}>
            Add
          </Button>
        </form>
        <ListTodo></ListTodo>
      </Container>
    </Fragment>
  );
}

export default InputTodo;