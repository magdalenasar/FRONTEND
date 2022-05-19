import { useState, useEffect } from "react";
import axios from "axios";

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]); //fulfilled
  const [loading, setLoading] = useState(false); //pending
  const [error, setError] = useState(false); //rejected
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const {
          data: { drinks },
        } = await axios(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon"
        );
        setLoading(false);
        setError(false);
        setCocktails(drinks);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h1>List of Lemon Cocktails</h1>
      {error && <p>NEN ERROR</p>}
      {loading && <p>LOADING...</p>}
      {cocktails.length > 0 && (
        <ul>
          {cocktails.map(({ idDrink, strDrink }) => (
            <li key={idDrink}>{strDrink}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cocktails;
