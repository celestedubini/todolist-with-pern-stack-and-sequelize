import React, { useState } from 'react';
import EditTodo from "./EditTodo";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

    //delete todo 
    const deleteTodo = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            })
        } catch (err) {
            console.error(err.message)
        }
    }


  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{content.length===0? `Empty` : isActive? null : content.length + " items"}</div>
      </div>
      {isActive && content.length !==0 && <div className="accordion-content">
      <table className="table mt-5 text-center">
            <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
          {content.map(todo => (
                    <tr key={todo.id}>
                        <td>{todo.description}</td>
                        <td><EditTodo todo={todo} /></td>
                        <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                    </tr>
                ))}
          </tbody>
          </table>
          
          
          
          
          
          
          </div>}
    </div>
  );
};

export default Accordion;