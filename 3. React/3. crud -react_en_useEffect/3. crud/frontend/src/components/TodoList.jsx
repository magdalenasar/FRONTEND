const TodoList = ({ todos, removeTodo, checkTodo }) => {
  return (
    <ul className="todoApp__list">
      {todos.map(({ id, todo, checked }) => (
        <li
          key={id}
          className={
            checked
              ? "todoApp__list__item todoApp__list__item--checked"
              : "todoApp__list__item"
          }>
          <span className="todoApp__list__item__text">{todo}</span>
          <button
            className="icon icon--check icon--circular"
            onClick={() => checkTodo(id, !checked)}></button>
          <button
            className="icon icon--remove"
            onClick={() => removeTodo(id)}></button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
