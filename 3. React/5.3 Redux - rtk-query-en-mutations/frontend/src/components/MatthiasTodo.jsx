import { useGetTodoByIdQuery } from "../store/todoApi";

const MatthiasTodo = () => {
  const { data, isError, isLoading } = useGetTodoByIdQuery("333", {
    //pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  return (
    <div>
      {isLoading && <p>loading...</p>}
      {isError && <p>error...</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default MatthiasTodo;
