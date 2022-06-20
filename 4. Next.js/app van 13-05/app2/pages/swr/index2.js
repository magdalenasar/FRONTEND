import useSWR, { useSWRConfig } from "swr";
import axios from "axios";
import { useState, useEffect } from "react";
const fetcher = (...args) => axios(...args).then((res) => res.data);

const Swr = () => {
  const { data, error } = useSWR("/api/todos", fetcher);
  const [todo, setTodo] = useState("");
  const { mutate } = useSWRConfig();

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <main>
      {error && <p>API could not be loaded</p>}
      {!data && <p>API loading...</p>}
      <form
        className="todoForm"
        onSubmit={async (e) => {
          e.preventDefault();
          const newTodo = todo;
          setTodo("");
          await axios.post("/api/todos", {
            checked: 0,
            todo: newTodo,
          });
          mutate("/api/todos");
        }}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button></button>
      </form>
      {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
      <ul className="todoHolder">
        {data &&
          data.map(({ id, todo, checked }) => (
            <li key={id} className={checked ? "checked" : ""}>
              <span>
                {todo} ({id})
              </span>
              <button
                className="delete"
                onClick={async (e) => {
                  e.preventDefault();
                  await axios.delete(`/api/todos/${id}`);
                  mutate("/api/todos");
                }}></button>
              <button
                className="check"
                onClick={async () => {
                  await axios.patch(`/api/todos/${id}`, {
                    checked: !checked,
                  });
                  mutate("/api/todos");
                }}></button>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Swr;
