import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos }) => {
    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        // Add new todo
        setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
        setInput(""); // Clear input after adding a todo
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input 
                type="text"
                placeholder="Enter Todo..."
                className="task-input"
                value={input}
                required
                onChange={onInputChange}
            />
            <button className="button-add" type="submit">
                Add
            </button>
        </form>
    );
};

export default Form;
