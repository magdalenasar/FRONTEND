import "./style.scss";
import Person from "./components/Person";
import Counter from "./components/Counter";
import Name from "./components/Name";

//my first react component
function App() {
  return (
    <div>
      <h1>React is amaizing :-)</h1>
      <Name />
      <Counter />
      <Person className="person person1" name="Magdalena" leeftijd={28} hobbies={["zwemmen", "dansen", "zingen"]}>🧠</Person>
      <Person name="Jos" leeftijd={32}>🫁</Person>
      <Person name="Ilse" leeftijd={41}>🫀</Person>
      <Person hobbies={["vissen", "schermen"]}>🩸</Person>
      <Person>👻</Person>
      </div>
  );
}


export default App;

