import { useState } from "react";   
import { usePostTodoMutation } from "../store/todoApi";

const Form = () => {
  const [val, setVal] = useState("");
  const [postTodo] = usePostTodoMutation();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        postTodo(val);
        setVal("");
      }}>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <input type="submit" value="add todo" />
    </form>
  );
};

export default Form;
