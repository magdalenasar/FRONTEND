import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { nanoid } from "nanoid";
import "./style.scss";

const App = () => {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);
    const [todos, setTodos] = useState([
        {
            id: nanoid(5),
                name: "tv kijken",
                checked: false,
        },
        {
            id: nanoid(5),
                name: "eten klaarmaken",
                checked: false,
        },
    ]);
    const addTodo= (name) => {
        setTodos([
            ...todos,
            {
                id: nanoid(5),
                name,
                checked: false,
            },
        ]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const checkTodo = (id) => setTodos(todos.map(todo => {
        if (todo === id) {
            todo.checked = !todo.checked;
        }
        return todo;
    })
    );
    return (
        <div className="todoApp">
            <Form
                input={input}
                setInput={setInput}
                addTodo={addTodo}
                error={error}
                setError={setError} />
            <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
        </div>
  );
}

export default App;