import React, { useState } from "react";
import "./App.css";
import Header from "./Header.js";
import Form from "./Form.js";
import TodoList from "./TodoList.js";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className="container">
      <div className="app-wrapper">

        <div>
          <Header />
        </div>

        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>

        <div>
          <TodoList 
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
            />
        </div>

      </div>
    </div>
  );
};

export default App;
