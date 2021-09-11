import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description)
    const [aisle, setAisle] = useState(todo.aisle)

    // edit description
    const updateDescription = async (event) => {
        event.preventDefault();
        try {
            const body = { description, aisle };
            const response = await fetch(`http://localhost:5000/todos/${todo.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            window.location = "/"
        } catch (err) {
            console.error(err.message)
        }
    }


    return <Fragment>
        <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.id}`}>
            Edit
        </button>

        <div className="modal" id={`id${todo.id}`} onClick={() => setDescription(todo.description)}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Modal Heading</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={() => setDescription(todo.description)}>&times;</button>
                    </div>
                    <div className="modal-body">
                        <input className="form-control" type="text"
                            value={description}
                            onChange={event => setDescription(event.target.value)} />
                        <select name="Aisle" value={aisle} onChange={event => setAisle(event.target.value)}>
                            <option value='Baking'>Baking</option>
                            <option value='Beverage'>Beverage</option>
                            <option value='Bread'>Bread</option>
                            <option value='Personal Care'>Personal Care</option>
                            <option value='Candy and Snack'>Candy and Snack</option>
                            <option value='Canned Goods'>Canned Goods</option>
                            <option value='Condiment'>Condiment</option>
                            <option value='Dairy'>Dairy</option>
                            <option value='Boxed Dinners and Pasta'>Boxed Dinners and Pasta</option>
                            <option value='Paper Products and Cleaning'>Paper Products and Cleaning</option>
                        </select>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={event => updateDescription(event)}>Edit</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
};

export default EditTodo;