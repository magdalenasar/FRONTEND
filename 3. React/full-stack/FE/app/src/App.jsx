import "./App.scss";
import { useAxios } from "./hooks";



const App = () => {
 const [products,loading,error] = useAxios("http://localhost/productdb/api.php/records/products")
  return (
   <>
      <h1>Onze Producten</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {products.length > 0 && (
        <ul>
          {products.map(({ name, id, foto }) => (
          <li key={id}>
            {name} - {id}
          </li>
          ))}
        </ul>
     )}
   </>
  );
};

export default App;