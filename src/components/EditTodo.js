import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

const EditTodo = ({ todo }) => {

    console.log(todo);

    const [description, setDescription] = useState(todo.description);

    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:3000/api/update/${todo.id}`, {
                method: "PUT",
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
            <Button 
               variant="contained"
               color="default"
               size="small"
               startIcon={<EditIcon />}
            data-target={`#id${todo.id}`}>Edit</Button>

            <div id={`#id${todo.id}`} className="modal fade" role="dialog">

                <div className="modal-dialog">

                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"></button>
                            <h4 className="modal-title">Edit task</h4>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">
                                Close
                    </button>
                            <button type="button" className="btn btn-success" onClick={e => updateDescription(e)}>
                                Edit
                    </button>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>

    )
}

export default EditTodo;