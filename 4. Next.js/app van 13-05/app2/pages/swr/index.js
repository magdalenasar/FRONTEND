import useSWR, { useSWRConfig } from "swr";
import axios from "axios";
import { useState, useEffect } from "react";
const fetcher = (...args) => axios(...args).then((res) => res.data);

const Swr = () => {
  const { data, error, isValidating } = useSWR("/api/todos", fetcher);
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
          const dataWithNewTodo = [
            ...data,
            {
              id: Math.random().toString(32).substring(2),
              todo: newTodo,
              checked: 0,
            },
          ];
          const options = {
            optimisticData: dataWithNewTodo,
            rollbackOnError: true,
          };
          //optimistic update
          mutate(
            "/api/todos",
            async () => {
              const { data } = await axios.post("/api/todos", {
                checked: 0,
                todo: newTodo,
              });
              return data;
            },
            options
          );
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
          data?.map(({ id, todo, checked }) => (
            <li key={id} className={checked ? "checked" : ""}>
              <span>
                {todo} ({id})
              </span>
              <button
                disabled={isValidating}
                className="delete"
                onClick={async (e) => {
                  e.preventDefault();
                  const dataWithTodoRemoved = data.filter(
                    (todo) => todo.id != id
                  );
                  const options = {
                    optimisticData: dataWithTodoRemoved,
                    rollbackOnError: true,
                  };
                  mutate(
                    "/api/todos",
                    async () => {
                      const resp = await axios.delete(`/api/todos/${id}`);
                      return resp.data;
                    },
                    options
                  );
                }}></button>
              <button
                disabled={isValidating}
                className="check"
                onClick={async (e) => {
                  e.preventDefault();
                  const dataWithTodoUpdated = data.map((todo) => {
                    if (todo.id === id) {
                      return { ...todo, checked: !todo.checked };
                    } else {
                      return todo;
                    }
                  });
                  const options = {
                    optimisticData: dataWithTodoUpdated,
                    rollbackOnError: true,
                  };
                  mutate(
                    "/api/todos",
                    async () => {
                      const resp = await axios.patch(`/api/todos/${id}`, {
                        checked: !checked,
                      });
                      return resp.data;
                    },
                    options
                  );
                }}></button>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Swr;
