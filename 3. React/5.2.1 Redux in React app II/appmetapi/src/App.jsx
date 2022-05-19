import { useSelector } from "react-redux";
import Todos from "./components/Todos";
import OneTodo from "./components/OneTodo";





const App = () => {
  const { counter } = useSelector((state) => state.counterState);
  return (
    <>
      <OneTodo />
      <hr />
      <div>{counter}</div>
      <Todos />
    </>
  );
};

export default App;
 