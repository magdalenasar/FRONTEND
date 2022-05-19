import "./styles/styles.scss";
//import MatthiasTodo from "./components/MatthiasTodo";
import Todos from "./components/Todos";
import Form from "./components/Form";
  
const App = () => {
  return (
    <div>  
      {/* <MatthiasTodo /> */}
      <Form />
      <Todos />
    </div>
  );
};

export default App; 
