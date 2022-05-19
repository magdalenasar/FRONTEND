const TodoList = ({ todos }) => {
    return (
        <>
            <h1>List of Todos:</h1>
            <ul>
                {todos.map(({id, name, checked}) => (
                    <li key={id} className={checked ? "checked" : ""}>
                        {name}
                        <button onClick={() => deleteTodo(id)}>delete</button>
                        <button onClick={()=> checkTodo(id)}>check</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TodoList;