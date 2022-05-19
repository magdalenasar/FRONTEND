import { useGetTodoByIdQuery } from "../data/todoApi";

const OneTodo = () => {
  const { data, isError, isLoading } = useGetTodoByIdQuery("222");
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default OneTodo;
