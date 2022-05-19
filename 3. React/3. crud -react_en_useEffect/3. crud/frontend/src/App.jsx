import "./css/style.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "./components/TodoList";
import { nanoid } from "nanoid";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const getTodos = async () => {
    const { data } = await axios("http://localhost:1234/todos");
    setTodos(data);
  };
  const addTodo = async (str) => {
    await axios.post("http://localhost:1234/todos", {
      id: nanoid(5),
      todo: str,
      checked: false,
    });
    getTodos();
  };
  const removeTodo = async (id) => {
    await axios.delete("http://localhost:1234/todos/" + id);
    getTodos();
  };
  const checkTodo = async (id, boolean) => {
    await axios.patch("http://localhost:1234/todos/" + id, {
      checked: boolean,
    });
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="todoApp">
      <form
        className="todoApp__form"
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(input);
          setInput("");
        }}>
        <input
          type="text"
          className="todoApp__form__input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="todoApp__form__button"></button>
      </form>
      {todos.length > 0 && (
        <TodoList todos={todos} removeTodo={removeTodo} checkTodo={checkTodo} />
      )}
    </div>
  );
};

export default App;
