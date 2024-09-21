import React, { useState } from "react";

const Todo = ({ todo, onComplete, onEdit, onSave, onRemove }) => {
    const [editText, setEditText] = useState(todo.title);

    const handleSaveClick = () => {
        onSave(todo, editText); // Pass the new text and the todo to onSave
    };

    return (
        <li className="list-item">
            {/* Show the input if editing, otherwise show the title */}
            {todo.editing ? (
                <>
                    <input
                        type="text"
                        value={editText}
                        className="list edit-input"
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <button className="button-add save-btn" onClick={handleSaveClick}>
                        Save
                    </button>
                </>
            ) : (
                <>
                    <span
                        style={{ textDecoration: todo.completed ? "line-through" : "" }}
                        className={`list ${todo.completed ? "completed" : ""}`}
                    >
                        {todo.title}
                    </span>
                    <button
                        className="button-complete task-button"
                        onClick={onComplete}
                        disabled={todo.completed}
                    >
                        <i className="fas fa-check-circle"></i>
                    </button>
                    <button
                        className="button-edit task-button"
                        onClick={onEdit}
                        disabled={todo.completed || todo.editing}
                    >
                        <i className="fas fa-edit"></i>
                    </button>
                    <button
                        className="button-delete task-button"
                        onClick={onRemove}
                        disabled={todo.completed || todo.editing}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </>
            )}
        </li>
    );
};

const TodoList = ({ todos, setTodos, editTodo, setEditTodo }) => {
    // Handle Complete
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };

    // Handle Edit
    const handleEdit = (todo) => {
        setEditTodo(todo);
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, editing: true }; // Set editing to true when the edit button is clicked
                }
                return item;
            })
        );
    };

    // Handle Save
    const handleSave = (todo, newText) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, title: newText, editing: false }; // Update the text and stop editing
                }
                return item;
            })
        );
        setEditTodo(null); // Clear after saving
    };

    // Handle Delete
    const handleDelete = (todo) => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    };

    return (
        <div>
            {todos.length === 0 ? (
                <h3 className="no-avail">No todos available. Add a todo to get started!</h3>
            ) : (
                <ul>
                    {todos.map((todo) => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            onComplete={() => handleComplete(todo)}
                            onEdit={() => handleEdit(todo)}
                            onSave={handleSave}
                            onRemove={() => handleDelete(todo)}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TodoList;
