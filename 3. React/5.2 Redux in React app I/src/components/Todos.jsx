import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, checkTodo, addTodo } from "../data/todo";

const Todos = () => {
  const todos = useSelector((s) => s.todoState);
  const dispatch = useDispatch();
  const [val, setVal] = useState("");
  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo(val));
          setVal("");
        }}>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </form>
      <ul>
        {todos.map(({ id, checked, todo }) => (
          <li className={checked ? "checked" : ""} key={id}>
            {todo}
            <button onClick={() => dispatch(checkTodo(id))}>toggle</button>
            <button onClick={() => dispatch(removeTodo(id))}>wis</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
