import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./data/counter";
import Todos from "./components/Todos";
import Colors from "./components/Colors";


const App = () => {
  const { counter } = useSelector((state) => state.counterState);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>{counter}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <hr/>
      <Todos />
      <Colors />
    </>
  );
};

export default App;
