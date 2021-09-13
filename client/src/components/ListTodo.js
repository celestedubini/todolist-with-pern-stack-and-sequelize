import React, { Fragment, useEffect, useState } from "react";
import Accordion from "./Accordion";
import './ListTodo.css';

const ListTodo = () => {
    const [todos, setTodos] = useState([]);
    const Aisles = ['Baking', 'Beverage', 'Bread', 'Personal Care', 'Candy and Snack', 'Canned Goods', 'Condiment', 'Dairy', 'Boxed Dinners and Pasta', 'Paper Products and Cleaning']

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            setTodos(jsonData.todos);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTodos();
    }, [todos]);
    return <Fragment>
            <div className="accordion">
                {Aisles.map((aisle, index) => (<Accordion title={aisle} content={todos.filter(todo => todo.aisle===aisle)} key={index}/>))}
                </div>
    </Fragment>;
};

export default ListTodo;