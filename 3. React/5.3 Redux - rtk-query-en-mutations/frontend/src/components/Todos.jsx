import React from "react";
import { useGetAllTodosQuery, useRemoveTodoMutation, useUpdateTodoMutation } from "../store/todoApi";

const Todos = () => {
  const { data, isError, isLoading } = useGetAllTodosQuery(undefined, {
    pollingInterval: 0,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const [removeTodo] = useRemoveTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  return (
    <div>
      {isLoading && <p>loading...</p>}
      {isError && <p>error...</p>}
      {data && (
        <ul>
          {data.map(({ id, todo, checked }) => (
            <li key={id} className={checked ? "checked" : ""}>
              {todo} <button onClick={() => { removeTodo(id) }}>WIS</button>
              <button onClick={() => {
                updateTodo({id, body: { checked: !checked }});
              }}>edit
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
