import React, { Fragment, useState } from 'react';
import ListTodo from './ListTodo';

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
      <div className="container">
        <h1 className='mt-5'>Todo panel</h1>
        <form className="d-flex" onSubmit={onSubmitForm}>
          <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
          <button className="btn btn-success">Add</button>
        </form>
        <ListTodo></ListTodo>
      </div>
    </Fragment>
  );
}

export default InputTodo;