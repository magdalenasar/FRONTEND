import "./App.css";
import Users from "./components/Users";
import Mouse from "./components/Mouse";
import useMousePosition from "./hooks/useMouseposition";

function App() {
  const [a, b] = useMousePosition();
  return (
    <div className="App">
      <Mouse />
      <Users />
      <h1>
        {a}, {b}
      </h1>
    </div>
  );
}

export default App;
