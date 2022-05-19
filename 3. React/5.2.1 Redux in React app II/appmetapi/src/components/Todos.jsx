import { useGetAllTodosQuery } from "../data/todoApi";


const Todos = () => {
  const { data, isLoading, isError } = useGetAllTodosQuery();
  return (
    <>
      {isError && <p>Er is een error</p>}
      {isLoading && <p>loading...</p>}
      {data && (
        <ul>
          {data.map(({ todo, checked, id }) => (
            <li className={checked ? "checked" : ""} key={id}>
              {todo}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Todos;
    