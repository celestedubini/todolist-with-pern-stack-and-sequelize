import React, { Fragment, useState } from "react";


const InputTodo = () => {
    const [description,
        setDescription] = useState("");
    const [aisle,
        setAisle] = useState("");

    const handleAisleInput = (event) => {
        setAisle(event.target.value)
    }
    const onSubmitForm = async (event) => {
        event.preventDefault();
        try {
            const body = {
                description,
                aisle
            };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            window.location = "/";
            console.log(response)
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Grocery List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="form-control mr-5"
                    name=""
                    id=""
                    value={description}
                    onChange={event => setDescription(event.target.value)} />
                <select name="Aisle" onChange={handleAisleInput}>
                    <option value='Baking'>Baking</option>
                    <option value='Beverage'>Beverage</option>
                    <option value='Bread'>Bread</option>
                    <option value='Personal Care'>Personal Care</option>
                    <option value='Candy and Snack'>Candy and Snack</option>
                    <option value='Canned Goods'>Canned Goods</option>
                    <option value='Condiment'>Condiment</option>
                    <option value='Dairy'>Dairy</option>
                    <option value='Boxed Dinners and Pasta'>Boxed Dinners and Pasta</option>
                    <option value='Paper Products and Cleaning'>Personal Care</option>
                </select>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputTodo;